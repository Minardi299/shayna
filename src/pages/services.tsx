import { useLoaderData } from "react-router"
import { Cta } from "@/components/sections/cta"
import { ServicesHero } from "@/components/sections/services-hero"
import {
  type MenuCategory,
  ServicesList,
} from "@/components/sections/services-list"
import { SITE } from "@/lib/site"

export function meta({ data }: { data?: { categories: MenuCategory[] } }) {
  const title = "Services & prices — Shayna's Nails & Spa"
  const description =
    "The full service and price list at Shayna's Nails & Spa in Phoenix: manicures, pedicures, nail spa, and combos with prices and times."
  const categories = data?.categories ?? []
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE.name },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: `${SITE.url}/services/` },
    { property: "og:image", content: `${SITE.url}/images/hero/hero1.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "NailSalon",
            "@id": `${SITE.url}/#business`,
            name: SITE.name,
            url: `${SITE.url}/`,
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Services & prices",
              itemListElement: categories.map((category) => ({
                "@type": "OfferCatalog",
                name: category.name,
                itemListElement: category.services.map((service) => ({
                  "@type": "Offer",
                  priceCurrency: service.currency ?? "USD",
                  price: service.price,
                  itemOffered: {
                    "@type": "Service",
                    name: service.name,
                    ...(service.description
                      ? { description: service.description }
                      : {}),
                  },
                })),
              })),
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE.url}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: `${SITE.url}/services/`,
              },
            ],
          },
        ],
      },
    },
  ]
}

export async function loader() {
  const url =
    import.meta.env.VITE_SERVICES_URL ||
    "https://shaynanailsaz.magsoft.us/api/menu"
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
