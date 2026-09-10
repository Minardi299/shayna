import { writeFileSync } from "node:fs"
import { join } from "node:path"

const base = (process.env.VITE_SITE_URL ?? "https://shayna.starb.ca").replace(
  /\/+$/,
  ""
)
const outDir = "build/client"
const routes = ["/", "/services/", "/privacy/"]
const today = new Date().toISOString().slice(0, 10)

const urls = routes
  .map(
    (path) =>
      `  <url>\n    <loc>${base}${path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`
  )
  .join("\n")

writeFileSync(
  join(outDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
)

// Cloudflare appends its managed bot rules to this file at the edge.
writeFileSync(
  join(outDir, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`
)
