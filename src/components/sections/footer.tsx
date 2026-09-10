import { Link } from "react-router"
import { MapPinIcon, PhoneIcon } from "lucide-react"
import { FacebookIcon, InstagramIcon } from "@/components/social-icons"
import { Separator } from "@/components/ui/separator"
import { SITE } from "@/lib/site"

const heading = "text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
const link =
  "text-[13px] text-cream/85 hover:text-brand-soft transition-colors"

export function Footer() {
  return (
    <footer className="dark bg-background text-foreground">
      <div className="shell grid gap-10 pt-16 pb-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
          <img
            src="/logo-mark.png"
            alt={SITE.name}
            className="h-[76px] w-auto"
          />
          <div className="flex gap-4">
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={link}
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={link}
            >
              <FacebookIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className={heading}>Visit</p>
          <a
            href={SITE.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${link} flex items-start gap-2`}
          >
            <MapPinIcon className="mt-0.5 size-4 shrink-0 text-brand" />
            <span>
              {SITE.addressLines[0]}
              <br />
              {SITE.addressLines[1]}
            </span>
          </a>
          <a href={SITE.phoneHref} className={`${link} flex items-center gap-2`}>
            <PhoneIcon className="size-4 shrink-0 text-brand" />
            {SITE.phone}
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <p className={heading}>Hours</p>
          {SITE.hours.map((h) => (
            <div key={h.days} className="flex flex-col text-[13px] text-cream/85">
              <span>{h.days}</span>
              <span className="text-muted-foreground">{h.time}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <p className={heading}>More</p>
          <Link to="/" className={link}>
            Home
          </Link>
          <Link to="/services" className={link}>
            Services
          </Link>
          <Link to="/privacy" className={link}>
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="shell">
        <Separator />
        <div className="flex flex-wrap items-center justify-between gap-5 py-6 text-[12px] text-muted-foreground">
          <span>
            © {new Date().getFullYear()} {SITE.name}
          </span>
          <span className="font-script text-xl text-brand-soft">
            see you soon ✿
          </span>
        </div>
      </div>
    </footer>
  )
}
