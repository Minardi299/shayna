import type { ReactNode } from "react"
import {
  Links,
  type LinksFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router"
import jostUrl from "@fontsource-variable/jost/files/jost-latin-wght-normal.woff2?url"
import caveatUrl from "@fontsource-variable/caveat/files/caveat-latin-wght-normal.woff2?url"
import cormorant300Url from "@fontsource/cormorant-garamond/files/cormorant-garamond-latin-300-normal.woff2?url"
import cormorant400Url from "@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-normal.woff2?url"
import "./index.css"

export const links: LinksFunction = () =>
  [jostUrl, cormorant300Url, cormorant400Url, caveatUrl].map((href) => ({
    rel: "preload",
    as: "font",
    type: "font/woff2",
    href,
    crossOrigin: "anonymous" as const,
  }))

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('reveal')",
          }}
        />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return <Outlet />
}
