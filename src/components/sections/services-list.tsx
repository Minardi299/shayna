import { Separator } from "@/components/ui/separator"

export type MenuService = {
  id: string
  name: string
  description?: string
  price: number
  durationMinutes?: number
  currency?: string
}

export type MenuCategory = {
  code: string
  name: string
  services: MenuService[]
}

function formatPrice(price: number, currency = "USD") {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: Number.isInteger(price) ? 0 : 2,
    }).format(price)
  } catch {
    return `$${price}`
  }
}

function Category({ category }: { category: MenuCategory }) {
  return (
    <div
      id={category.code}
      data-reveal
      className="mb-[clamp(34px,4vw,56px)] break-inside-avoid scroll-mt-[150px]"
    >
      <div className="mb-3.5 flex items-baseline justify-between gap-3.5">
        <h2 className="font-serif text-[clamp(27px,3.6vw,34px)]">
          {category.name}
        </h2>
        <span className="flex shrink-0 gap-6 text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          <span className="w-16 text-right">Price</span>
          <span className="w-20 text-right">Duration</span>
        </span>
      </div>

      {category.services.map((s) => (
        <div key={s.id}>
          <Separator />
          <div className="flex items-baseline justify-between gap-4 py-3.5">
            <div className="flex flex-col gap-1">
              <span className="font-serif text-[21px]">{s.name}</span>
              {s.description && (
                <span className="max-w-md text-sm text-muted-foreground">
                  {s.description}
                </span>
              )}
            </div>
            <div className="flex shrink-0 gap-6 text-[15px]">
              <span className="w-16 text-right">
                {formatPrice(s.price, s.currency)}
              </span>
              <span className="w-20 text-right text-muted-foreground">
                {s.durationMinutes ? `${s.durationMinutes} min` : "—"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function ServicesList({ categories }: { categories: MenuCategory[] }) {
  return (
    <section
      id="list"
      className="shell columns-1 gap-x-[clamp(34px,4vw,56px)] pt-[clamp(48px,7vw,76px)] pb-5 md:columns-2"
    >
      {categories.map((category) => (
        <Category key={category.code} category={category} />
      ))}
    </section>
  )
}
