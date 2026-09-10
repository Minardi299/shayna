import { PhoneIcon } from "lucide-react"
import { SITE } from "@/lib/site"

export function CallFab() {
  return (
    <div className="fixed right-[clamp(20px,2.4vw,28px)] bottom-[clamp(18px,2.4vw,28px)] z-30">
      <a
        href={SITE.phoneHref}
        className="dark flex items-center gap-3.5 rounded-full border border-primary-foreground bg-background py-5 pr-7 pl-6 text-foreground shadow-[0_14px_34px_rgba(23,18,15,0.3)] transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <PhoneIcon className="size-5" />
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="text-[10.5px] tracking-[0.24em] uppercase opacity-60">
            Call the studio
          </span>
          <span className="font-serif text-2xl">{SITE.phone}</span>
        </span>
      </a>
    </div>
  )
}
