import { Separator } from "@/components/ui/separator"
import { SERVICE_GROUPS, type ServiceGroup } from "@/lib/site"

function Group({ group }: { group: ServiceGroup }) {
  return (
    <div
      id={group.id}
      data-reveal
      className="scroll-mt-[150px]"
    >
      <div className="mb-3.5 flex items-baseline justify-between gap-3.5">
        <h2 className="font-serif text-[clamp(27px,3.6vw,34px)]">
          {group.title}
        </h2>
        <span className="flex shrink-0 gap-6 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          <span className="w-14 text-right">Cash</span>
          <span className="w-14 text-right">Card</span>
        </span>
      </div>

      {group.note && (
        <p className="-mt-1.5 mb-2.5 font-script text-[22px] text-brand">
          {group.note}
        </p>
      )}

      {group.items.map((item) => (
        <div key={item.name}>
          <Separator />
          <div className="flex items-baseline justify-between gap-4 py-3.5">
            <span className="font-serif text-[21px]">{item.name}</span>
            <span className="flex gap-6 text-[15px]">
              <span className="w-14 text-right">{item.cash}</span>
              <span className="w-14 text-right text-muted-foreground">
                {item.card}
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ServicesList() {
  return (
    <section
      id="list"
      className="shell grid gap-x-[clamp(34px,4vw,56px)] gap-y-[clamp(34px,4vw,56px)] pt-[clamp(48px,7vw,76px)] pb-5 [grid-template-columns:repeat(auto-fit,minmax(min(100%,420px),1fr))]"
    >
      {SERVICE_GROUPS.map((group) => (
        <Group key={group.id} group={group} />
      ))}
    </section>
  )
}
