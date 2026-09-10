import { BookButton } from "@/components/book-button"
import { Scribble } from "@/components/scribble"
import { SITE } from "@/lib/site"

const label = "mb-3 text-[11.5px] uppercase tracking-[0.22em] text-muted-foreground"

export function Visit() {
  return (
    <section
      id="visit"
      className="border-t border-border bg-sand py-[clamp(68px,10vw,100px)]"
    >
      <div className="shell grid gap-[clamp(44px,7vw,64px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
        <div>
          <h2
            data-reveal
            className="mb-10 font-serif text-[clamp(34px,8vw,66px)] leading-[1.02] font-light tracking-[-0.015em]"
          >
            Find us
          </h2>
          <p
            data-reveal
            className="mb-10 max-w-[360px] text-base leading-[1.7] font-light text-muted-foreground [text-wrap:pretty]"
          >
            Our studio is in Ahwatukee, on E. Chandler Blvd in Phoenix.
          </p>
          <div className="mb-12">
            <span className="relative inline-block">
              <a
                href={SITE.phoneHref}
                className="font-serif text-[clamp(29px,7.4vw,52px)] whitespace-nowrap"
              >
                {SITE.phone}
              </a>
              <Scribble className="pointer-events-none absolute -inset-x-10 -inset-y-8 h-[calc(100%+64px)] w-[calc(100%+80px)] overflow-visible" />
            </span>
          </div>
          <BookButton className="px-10 py-5">Book online</BookButton>
        </div>

        <div className="grid content-start gap-8">
          <div className="border-b border-border pb-6">
            <div className={label}>Studio</div>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-serif text-2xl leading-[1.4]"
            >
              {SITE.addressLines[0]}
              <br />
              {SITE.addressLines[1]}
            </a>
          </div>
          <div className="border-b border-border pb-6">
            <div className={label}>Hours</div>
            {SITE.hours.map((h) => (
              <div
                key={h.days}
                className="flex justify-between gap-4 py-1 font-serif text-xl"
              >
                <span>{h.days}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>
          <div>
            <div className={label}>Follow</div>
            <div className="flex gap-6 font-serif text-xl">
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href={SITE.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
