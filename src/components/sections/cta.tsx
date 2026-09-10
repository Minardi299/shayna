import { BookButton } from "@/components/book-button"
import { SITE } from "@/lib/site"

export function Cta() {
  return (
    <section className="shell pt-[clamp(56px,8vw,90px)] pb-[clamp(70px,10vw,110px)] text-center">
      <h2
        data-reveal
        className="mb-8 font-serif text-[clamp(32px,6vw,56px)] leading-[1.05] font-light"
      >
        Ready when you are
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-x-[clamp(30px,6vw,48px)] gap-y-8">
        <BookButton className="px-10 py-5">Book online</BookButton>
        <span className="relative inline-block">
          <a
            href={SITE.phoneHref}
            className="font-serif text-[clamp(26px,5vw,32px)] whitespace-nowrap"
          >
            {SITE.phone}
          </a>
          <svg
            viewBox="0 0 480 140"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-[34px] -inset-y-[28px] h-[calc(100%+56px)] w-[calc(100%+68px)] overflow-visible"
          >
            <path
              data-draw
              pathLength={1}
              strokeDasharray={1}
              d="M338 20 C 236 3, 92 6, 40 34 C -10 62, 26 108, 132 124 C 244 141, 402 133, 450 102 C 494 73, 452 32, 356 19 C 300 11, 246 12, 208 18"
              fill="none"
              stroke="var(--color-brand)"
              strokeWidth={2.2}
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
    </section>
  )
}
