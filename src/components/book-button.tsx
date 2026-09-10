import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { SITE } from "@/lib/site"

const pill =
  "h-auto rounded-full px-7 py-3.5 text-[11.5px] font-normal tracking-[0.2em] uppercase hover:bg-brand hover:text-ink"

export function BookButton({
  children = "Book us",
  className,
}: {
  children?: ReactNode
  className?: string
}) {
  return (
    <Button
      nativeButton={false}
      className={cn(pill, className)}
      render={
        <a
          href={SITE.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
        />
      }
    >
      {children}
    </Button>
  )
}
