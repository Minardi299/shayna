import { Link } from "react-router"
import { SERVICE_TEASERS } from "@/lib/site"

export function HomeServices() {
  return (
    <section
      id="services"
      className="shell pt-[clamp(72px,11vw,110px)] pb-10"
    >
      <h2
        data-reveal
        className="mb-14 font-serif text-[clamp(32px,7vw,62px)] leading-[1.02] font-light tracking-[-0.015em]"
      >
        Our services
      </h2>

      <div className="grid gap-[clamp(18px,2.5vw,26px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,268px),1fr))]">
        {SERVICE_TEASERS.map((s, i) => (
          <div
            key={s.title}
            data-reveal
            style={{ transitionDelay: `${i * 70}ms` }}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
            <div className="px-6 pt-7 pb-8">
              <div className="flex items-baseline justify-between gap-3.5">
                <h3 className="font-serif text-[27px]">{s.title}</h3>
                <span className="font-serif text-[22px] whitespace-nowrap text-brand-deep italic">
                  {s.price}
                </span>
              </div>
              <p className="mt-3 text-[14.5px] leading-[1.65] font-light text-muted-foreground">
                {s.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <span className="relative inline-block">
          <Link
            to="/services/"
            className="border-b border-foreground/30 pb-1 font-serif text-2xl hover:border-brand-deep hover:text-brand-soft"
          >
            See the full price list
          </Link>
          <svg
            viewBox="0 0 130 92"
            aria-hidden="true"
            className="absolute -top-3.5 -left-[118px] hidden h-[78px] w-[110px] overflow-visible md:block"
          >
            <path
              data-draw
              pathLength={1}
              strokeDasharray={1}
              d="M8 4 C 6 40, 30 66, 118 74"
              fill="none"
              stroke="var(--color-brand)"
              strokeWidth={2}
              strokeLinecap="round"
            />
            <path
              data-draw
              pathLength={1}
              strokeDasharray={1}
              d="M98 60 L 120 75 L 96 86"
              fill="none"
              stroke="var(--color-brand)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </section>
  )
}
