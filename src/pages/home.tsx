import { Awards } from "@/components/sections/awards"
import { Gallery } from "@/components/sections/gallery"
import { HomeHero } from "@/components/sections/home-hero"
import { HomeServices } from "@/components/sections/home-services"
import { Marquee } from "@/components/sections/marquee"
import { Reviews } from "@/components/sections/reviews"
import { Visit } from "@/components/sections/visit"
import { SITE } from "@/lib/site"

export function meta() {
  const title = "Shayna's Nails & Spa — Phoenix, AZ"
  const description =
    "A small nail and spa studio in Phoenix. Manicures, deep-relax spa pedicures, gel, and waxing — finished by hand. Book online or call (480) 704-1245."
  return [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE.name },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: `${SITE.url}/` },
    { property: "og:image", content: `${SITE.url}/images/hero/hero1.jpg` },
    { name: "twitter:card", content: "summary_large_image" },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "NailSalon",
        "@id": `${SITE.url}/#business`,
        name: SITE.name,
        url: `${SITE.url}/`,
        telephone: "+1-480-704-1245",
        image: `${SITE.url}/images/hero/hero1.jpg`,
        logo: `${SITE.url}/logo-mark.png`,
        priceRange: "$6–$130",
        address: {
          "@type": "PostalAddress",
          streetAddress: "4221 E. Chandler Blvd #B-121",
          addressLocality: "Phoenix",
          addressRegion: "AZ",
          postalCode: "85048",
          addressCountry: "US",
        },
        hasMap: SITE.mapsUrl,
        sameAs: [SITE.facebookUrl, SITE.instagramUrl],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Sunday",
            opens: "10:00",
            closes: "17:00",
          },
        ],
      },
    },
  ]
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee />
      <HomeServices />
      <Awards />
      <Gallery />
      <Reviews />
      <Visit />
    </>
  )
}
