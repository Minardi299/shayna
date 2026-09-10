import { useState } from "react"
import { Link, useLocation } from "react-router"
import { MenuIcon } from "lucide-react"
import { BookButton } from "@/components/book-button"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { SITE } from "@/lib/site"

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  return (
    <header className="dark sticky top-0 z-40 bg-background text-foreground">
      <div className="shell flex items-center justify-between gap-4 py-3.5">
        <Link to="/" className="shrink-0">
          <img
            src="/logo-mark.png"
            alt={SITE.name}
            className="h-[clamp(38px,6.5vw,50px)] w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-[12.5px] uppercase tracking-[0.18em] transition-colors",
                pathname === l.to
                  ? "border-b border-brand pb-0.5 text-cream"
                  : "text-cream/85 hover:text-brand-soft"
              )}
            >
              {l.label}
            </Link>
          ))}
          <BookButton />
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={<Button variant="ghost" size="icon" aria-label="Menu" />}
            className="md:hidden"
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="right" className="dark bg-background">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <nav className="mt-8 flex flex-col gap-1 px-4">
              {LINKS.map((l) => (
                <SheetClose
                  key={l.to}
                  render={
                    <Link
                      to={l.to}
                      className="border-b border-border py-3 font-serif text-3xl text-cream/90"
                    />
                  }
                >
                  {l.label}
                </SheetClose>
              ))}
              <BookButton className="mt-6 w-full py-4" />
              <span className="mt-4 text-center font-script text-xl text-brand-soft">
                or call {SITE.phone}
              </span>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
