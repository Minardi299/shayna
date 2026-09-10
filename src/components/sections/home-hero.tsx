import { useEffect, useState } from "react"
import { BookButton } from "@/components/book-button"
import { Scribble } from "@/components/scribble"
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { HERO_SLIDES, SITE } from "@/lib/site"

export function HomeHero() {
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (!api) return
    const onSelect = () => setSelected(api.selectedScrollSnap())
    api.on("select", onSelect)
    onSelect()
    const timer = setInterval(() => api.scrollNext(), 5200)
    return () => {
      clearInterval(timer)
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <section
      id="top"
      className="shell grid items-center gap-[clamp(44px,7vw,64px)] pt-[clamp(44px,7vw,70px)] pb-[clamp(60px,9vw,90px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,330px),1fr))]"
    >
      <div>
        <h1
          data-reveal
          className="mb-6 font-serif text-[clamp(41px,10vw,92px)] leading-[0.98] font-light tracking-[-0.02em]"
        >
          Beautiful hands,
          <br />
          <span className="relative inline-block">
            <em className="pr-[0.08em] font-script text-[0.78em] not-italic">
              made by hand
            </em>
            <svg
              viewBox="0 0 300 26"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="pointer-events-none absolute -right-2.5 -left-1.5 -bottom-1 h-[22px] w-[calc(100%+16px)] overflow-visible"
            >
              <path
                data-draw
                pathLength={1}
                strokeDasharray={1}
                d="M4 15 C 62 5, 152 22, 296 7"
                fill="none"
                stroke="var(--color-brand)"
                strokeWidth={2.4}
                strokeLinecap="round"
              />
              <path
                data-draw
                pathLength={1}
                strokeDasharray={1}
                d="M18 22 C 90 14, 176 26, 286 16"
                fill="none"
                stroke="var(--color-brand)"
                strokeWidth={1.5}
                strokeLinecap="round"
                opacity={0.55}
              />
            </svg>
          </span>
        </h1>

        <p
          data-reveal
          className="mb-10 max-w-[430px] text-[17px] leading-[1.65] font-light text-muted-foreground [text-wrap:pretty]"
        >
          A small Ahwatukee studio where every set is finished by a person, not
          a production line. Precise manicures, deep-relax spa pedicures, and
          gel that actually lasts.
        </p>

        <div
          data-reveal
          className="flex flex-wrap items-center gap-x-[clamp(30px,6vw,44px)] gap-y-5"
        >
          <BookButton className="px-10 py-5">Book an appointment</BookButton>
          <span className="relative inline-block">
            <a
              href={SITE.phoneHref}
              className="font-serif text-[27px] whitespace-nowrap"
            >
              {SITE.phone}
            </a>
            <Scribble className="pointer-events-none absolute -inset-x-8 -inset-y-[26px] h-[calc(100%+52px)] w-[calc(100%+64px)] overflow-visible" />
          </span>
        </div>

        <div
          data-reveal
          className="mt-14 flex flex-wrap gap-x-8 gap-y-2 text-[12px] tracking-[0.14em] text-muted-foreground uppercase"
        >
          <span>Mon–Sat 9–7</span>
          <span>Sun 10–5</span>
          <span>Walk-ins welcome</span>
        </div>
      </div>

      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{ loop: true }}
          className="aspect-[4/5] overflow-hidden rounded-t-[min(280px,42vw)] rounded-b-[18px] bg-[#e6ded4]"
        >
          <CarouselContent className="ml-0 h-full">
            {HERO_SLIDES.map((slide, i) => (
              <CarouselItem key={slide.src} className="h-full pl-0">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2.5">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "size-2.5 rounded-full border border-white",
                selected === i ? "bg-white" : "bg-transparent"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
