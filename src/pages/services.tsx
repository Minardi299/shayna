import { Cta } from "@/components/sections/cta"
import { ServicesHero } from "@/components/sections/services-hero"
import { ServicesList } from "@/components/sections/services-list"

export function meta() {
  return [
    { title: "Services & prices — Shayna's Nails & Spa" },
    {
      name: "description",
      content:
        "The full service and price list at Shayna's Nails & Spa in Phoenix: manicures, spa pedicures, gel, dip powder, Dead Sea, kids care, and waxing.",
    },
  ]
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <Cta />
    </>
  )
}
