import { Awards } from "@/components/sections/awards"
import { Contact } from "@/components/sections/contact"
import { Gallery } from "@/components/sections/gallery"
import { HomeHero } from "@/components/sections/home-hero"
import { HomeServices } from "@/components/sections/home-services"
import { Marquee } from "@/components/sections/marquee"
import { Reviews } from "@/components/sections/reviews"
import { Visit } from "@/components/sections/visit"

export function meta() {
  return [
    { title: "Shayna's Nails & Spa — Phoenix, AZ" },
    {
      name: "description",
      content:
        "A small nail and spa studio in Phoenix. Manicures, deep-relax spa pedicures, gel, and waxing — finished by hand. Book online or call (480) 704-1245.",
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
      <Contact />
      <Visit />
    </>
  )
}
