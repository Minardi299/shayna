import { PhoneIcon } from "lucide-react"
import { SITE } from "@/lib/site"

export function CallFab() {
  return (
    <div className="fixed right-[clamp(20px,2.4vw,28px)] bottom-[clamp(18px,2.4vw,28px)] z-30">
      <a
        href={SITE.phoneHref}
        className="dark flex items-center gap-3 rounded-full bg-background py-4 pr-6 pl-5 text-foreground shadow-[0_14px_34px_rgba(23,18,15,0.3)] transition-colors hover:bg-brand hover:text-ink"
      >
        <PhoneIcon className="size-4" />
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="text-[9.5px] tracking-[0.24em] text-muted-foreground uppercase">
            Call the studio
          </span>
          <span className="font-serif text-xl text-cream">{SITE.phone}</span>
        </span>
      </a>
    </div>
  )
}
