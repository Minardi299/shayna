import type { SVGProps } from "react"

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 8.5V6.9c0-.8.2-1.2 1.3-1.2H17V2.8c-.6-.1-1.5-.2-2.5-.2-2.6 0-4.3 1.5-4.3 4.4v1.5H7.5V12H10v9h3.3v-9h2.5l.4-3.5H14z" />
    </svg>
  )
}
