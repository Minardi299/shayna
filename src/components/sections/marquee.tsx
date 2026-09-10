import { MARQUEE } from "@/lib/site"

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-11 pr-11 font-serif text-[26px] text-foreground/75 italic whitespace-nowrap"
    >
      {MARQUEE.map((word) => (
        <span key={word} className="flex items-center gap-11">
          {word}
          <span className="font-script text-brand-deep not-italic">✿</span>
        </span>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-sand py-5">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  )
}
