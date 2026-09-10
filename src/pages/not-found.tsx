import { Link } from "react-router"
import { BookButton } from "@/components/book-button"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <section className="shell flex flex-col items-center gap-5 py-[clamp(90px,14vw,150px)] text-center">
      <p className="text-[11px] tracking-[0.24em] text-brand uppercase">404</p>
      <h1 className="font-serif text-[clamp(40px,8vw,72px)] leading-none font-light">
        Page not found
      </h1>
      <p className="max-w-md text-muted-foreground">
        The page you asked for does not exist or has moved.
      </p>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
        <Button
          nativeButton={false}
          className="h-auto rounded-full px-8 py-4 text-[11.5px] font-normal tracking-[0.2em] uppercase hover:bg-brand hover:text-ink"
          render={<Link to="/" />}
        >
          Back to services
        </Button>
        <BookButton>Book us</BookButton>
      </div>
    </section>
  )
}
