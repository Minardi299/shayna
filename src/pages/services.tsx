import { useLoaderData } from "react-router"
import { Cta } from "@/components/sections/cta"
import { ServicesHero } from "@/components/sections/services-hero"
import {
  type MenuCategory,
  ServicesList,
} from "@/components/sections/services-list"

export function meta() {
  return [
    { title: "Services & prices — Shayna's Nails & Spa" },
    {
      name: "description",
      content:
        "The full service and price list at Shayna's Nails & Spa in Phoenix: manicures, pedicures, nail spa, and combos with prices and times.",
    },
  ]
}

export async function loader() {
  const url = import.meta.env.VITE_SERVICES_URL
  if (!url) {
    throw new Error(
      "VITE_SERVICES_URL is not set. Add it to your .env file (see .env.example)."
    )
  }
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Could not load services from ${url} (HTTP ${res.status}).`)
  }
  const data = (await res.json()) as { categories: MenuCategory[] }
  const categories = (data.categories ?? []).filter(
    (c) => c.services && c.services.length > 0
  )
  return { categories }
}

export default function ServicesPage() {
  const { categories } = useLoaderData<typeof loader>()
  return (
    <>
      <ServicesHero />
      <ServicesList categories={categories} />
      <Cta />
    </>
  )
}
