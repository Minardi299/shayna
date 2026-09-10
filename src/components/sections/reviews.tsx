import { useRef } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { REVIEW_STATS, REVIEWS, SITE, type Review } from "@/lib/site"

const AVATAR = ["#E08320", "#C9A227", "#B98A80", "#8FA98C", "#9C8AA8", "#B0651A"]

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase()
}

function GoogleMark() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="size-6">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.7-.4-3.9H24v7.1h12.1c-.2 1.8-1.6 4.6-4.5 6.5l-.1.3 6.5 5 .5.1c4.1-3.8 6.6-9.4 6.6-15.1" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4c-1.8 1.3-4.3 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-.3.1-6.7 5.2-.1.3C8 41.5 15.4 46 24 46" />
      <path fill="#FBBC05" d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4s.3-3.1.7-4.4v-.4l-6.8-5.3-.2.1A22 22 0 0 0 2 24c0 3.5.9 6.9 2.5 9.9z" />
      <path fill="#EA4335" d="M24 10.1c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 3.9 29.9 2 24 2 15.4 2 8 6.5 4.5 14.1l7 5.5c1.8-5.3 6.7-9.5 12.5-9.5" />
    </svg>
  )
}

function Stars() {
  return (
    <div
      aria-label="5 out of 5 stars"
      className="mb-4 text-sm tracking-[3px] text-gold"
    >
      ★★★★★
    </div>
  )
}

function Card({ review, color }: { review: Review; color: string }) {
  return (
    <div className="flex-[0_0_clamp(280px,32vw,380px)] snap-start rounded-xl border border-border bg-ink-panel px-[30px] pt-8 pb-[30px]">
      <Stars />
      <p className="mb-6 font-serif text-xl leading-[1.5] font-light text-foreground [text-wrap:pretty]">
        {review.text}
      </p>
      <div className="flex items-center gap-3">
        <span
          className="flex size-[38px] items-center justify-center rounded-full text-[15px] font-medium text-ink"
          style={{ background: color }}
        >
          {initials(review.name)}
        </span>
        <span className="flex flex-col">
          <span className="text-sm text-cream">{review.name}</span>
          <span className="text-[11.5px] tracking-[0.08em] text-muted-foreground">
            {review.date}
          </span>
        </span>
      </div>
    </div>
  )
}

export function Reviews() {
  const track = useRef<HTMLDivElement>(null)
  const scroll = (dir: number) => {
    const el = track.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const step = card ? card.getBoundingClientRect().width + 20 : 340
    el.scrollBy({ left: dir * step, behavior: "smooth" })
  }

  return (
    <section className="dark mt-[clamp(72px,11vw,110px)] bg-background pt-[clamp(68px,10vw,100px)] pb-[clamp(76px,11vw,110px)] text-foreground">
      <div className="shell mb-[clamp(36px,5vw,52px)] flex flex-wrap items-end justify-between gap-7">
        <div>
          <div className="mb-3.5 flex items-center gap-3">
            <GoogleMark />
            <span className="font-script text-2xl text-brand-soft">
              live from Google
            </span>
          </div>
          <h2 className="font-serif text-[clamp(32px,7vw,58px)] leading-[1.05] font-light tracking-[-0.015em]">
            What our guests say
          </h2>
        </div>
        <div className="flex items-center gap-[26px]">
          <div className="text-right">
            <div className="font-serif text-[52px] leading-none">
              {REVIEW_STATS.rating}
            </div>
            <div className="text-[15px] tracking-[3px] text-gold">★★★★★</div>
            <div className="mt-1.5 text-[12px] tracking-[0.14em] text-muted-foreground uppercase">
              {REVIEW_STATS.count} reviews
            </div>
          </div>
          <div className="hidden gap-2.5 sm:flex">
            <Button
              variant="outline"
              size="icon"
              className="size-[46px] rounded-full border-cream/30 bg-transparent hover:bg-cream hover:text-ink"
              aria-label="Previous reviews"
              onClick={() => scroll(-1)}
            >
              <ArrowLeftIcon />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="size-[46px] rounded-full border-cream/30 bg-transparent hover:bg-cream hover:text-ink"
              aria-label="Next reviews"
              onClick={() => scroll(1)}
            >
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>

      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[clamp(18px,4vw,28px)] pb-2 [scroll-padding-left:clamp(18px,4vw,28px)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {REVIEWS.map((r, i) => (
          <Card key={r.name} review={r} color={AVATAR[i % AVATAR.length]} />
        ))}
      </div>

      <div className="shell mt-[38px]">
        <a
          href={SITE.googleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-cream/40 pb-0.5 text-[12.5px] tracking-[0.18em] text-brand-soft uppercase hover:text-cream"
        >
          Read all reviews on Google
        </a>
      </div>
    </section>
  )
}
