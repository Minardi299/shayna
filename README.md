# Shayna's Nails & Spa — website

The website for Shayna's Nails & Spa, a nail and spa studio in Phoenix, Arizona. It has a home page, a full price list, and a privacy policy.

Built with React 19, Vite, [shadcn/ui](https://ui.shadcn.com) (Base UI, `base-nova`), and React Router 7 in framework mode. The build step pre-renders each page to plain HTML, CSS, and JS. The pages are complete before JavaScript loads.

The design comes from the "Shayna Nails Spa" and "Shayna Services" Claude Design files. The content — prices, address, hours, photos, and the privacy policy — comes from the live site at [shaynanailsspa.com](https://shaynanailsspa.com).

## Development

1. Install [pnpm](https://pnpm.io) and Node 22 or later.
2. Install the dependencies: `pnpm install`
3. Start the dev server: `pnpm dev`

## Configuration

The site reads one environment variable, `VITE_BOOKING_URL` — the online booking link that every "Book" button points to. The build fails if it is not set.

Set it in a `.env` file at the project root (see `.env.example`):

```sh
VITE_BOOKING_URL=https://your-booking-link
```

To change the booking link later, edit `.env`, or set `VITE_BOOKING_URL` in the deploy environment (a real environment variable overrides the `.env` file).

## Build

Run `pnpm build`. The static site is written to `build/client/`:

- `index.html` — the home page, pre-rendered
- `services/index.html` — the price list, pre-rendered
- `privacy/index.html` — the privacy policy, pre-rendered
- `__spa-fallback.html` — shell for unknown paths; it renders the 404 page in the browser
- `404.html` — a copy of the shell, for hosts that serve a `404.html` file

Run `pnpm preview` to serve the built site on port 4173.

## Deploy

Deploy `build/client/` as the static root of any web host. Map the host's 404 handling to `404.html` so unknown paths show the site's own 404 page.

## Project structure

- `src/pages/` — one file per route: `home.tsx` (`/`), `services.tsx` (`/services`, the price list), `privacy.tsx` (`/privacy`), `not-found.tsx`. Each page sets its own title with a `meta()` export.
- `src/components/sections/` — one file per page section. Home: home hero, marquee, home services, awards, gallery, reviews, contact, visit. Shared: navbar, footer. Services: services hero, services list, CTA.
- `src/components/book-button.tsx` — the shared "Book us" pill button. `src/components/scribble.tsx` — the hand-drawn circle around the phone number.
- `src/components/ui/` — components from the shadcn registry (button, card, sheet, separator, carousel, field, input, textarea). Add more with `pnpm dlx shadcn@latest add <name>`.
- `src/lib/site.ts` — the single source of business data: name, phone, address, hours, links, the price list, the home service cards, the hero slides, and the gallery.
- `src/lib/use-reveal.ts` — the scroll-reveal hook. It runs on each route and reveals every element marked `data-reveal` or `data-draw` as it scrolls into view.
- `src/index.css` — the styling source of truth. It holds two color surfaces as CSS variables: the cream page (`:root`) and the ink header, footer, menu, and reviews band (`.dark`). Every shadcn `Button` reads these tokens, so a button turns cream on the ink surface and ink on the cream surface with no extra code.
- `public/images/` — photos from the live site, resized. `src/root.tsx` — the HTML shell, favicon, and font links.

### Content notes

- The price list shows a cash price and a card price. The card price is the cash price plus 3%.
- The reviews band shows the studio's real Google reviews as on-brand cards. The text is a snapshot in `src/lib/site.ts` (`REVIEWS` and `REVIEW_STATS`) — refresh it from the Google listing when you want newer reviews. See "Live Google reviews" below for auto-updating options.
- The contact form checks the fields and shows a thank-you message, but it does not send anything yet. It needs a backend — a form service (for example Formspree), a serverless function, or a `mailto:` action. Until then it is a demo.
- The photos come from the live site and were resized to keep the page light. Replace them in `public/images/` with the studio's own files when you have them.
- The `Birdrockers` display font from the design is not included. The script text falls back to `Caveat`, which is the design's own fallback.

## Live Google reviews

The review cards use real Google reviews, but the text is a static snapshot. To pull reviews and still control the look, you have a few options:

- **Google Places API (recommended for live + custom).** Google's official API returns up to 5 reviews for the place. Fetch them with an API key in a small build script or a serverless function, write the result to JSON, and render it with the same cards. You keep full control of the look. Limits: 5 reviews at a time, you cannot pick which 5, and you must follow Google's attribution rules. Needs an API key and billing (it has a free tier).
- **A reviews data API (for more than 5).** Services such as SerpAPI return the full review list. Cache the result to JSON on a schedule and render it with the cards. This costs money and needs a build step or a backend.
- **A styled third-party widget.** Elfsight, EmbedSocial, or a paid Trustindex plan give more theme control than the free widget. They still use their own styling system and a monthly fee, and some render inside an iframe you cannot style at all.
- **Stay static (current).** Free, reliable, and fully on brand. Refresh `REVIEWS` in `src/lib/site.ts` by hand now and then.

The earlier free Trustindex widget was dropped: it broke on mobile and its look could not be matched to the site.

## CI

Every push to `main` and every pull request runs `.github/workflows/ci.yml`. The workflow lints the code, builds the static site, and uploads `build/client/` as the `static-site` artifact.

To run CI by hand, open Actions → CI → "Run workflow", or run `gh workflow run CI`.

## Releases

Every push to `main` rebuilds the rolling `latest` release. Its zip always matches the current state of `main`.

To publish a versioned release, push a tag that starts with `v`:

```sh
git tag v0.1.0
git push origin v0.1.0
```

The release workflow builds the site, zips it, and attaches the zip to a GitHub release. You can also start the workflow from the Actions tab with a tag name.

## Deploy a release zip

The zip on the Releases page is the built site: plain HTML, CSS, JS, and images. It needs no build step and no Node.

Serve the files over HTTP. Do not open `index.html` from the file system. Asset paths and ES modules do not work on `file://` URLs.

To run it on your own machine:

```sh
unzip shayna-website-latest.zip -d shayna-site
cd shayna-site
python3 -m http.server 8000
```

Then open http://localhost:8000. `npx serve` works too.

To deploy it, upload the folder contents (with `index.html` at the web root) to any static host:

- **Cloudflare Workers** — run `npx wrangler deploy` with a `wrangler.jsonc` that points `assets.directory` at the folder. This repo's config file is a working example.
- **Netlify** — drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
- **Vercel** — run `npx vercel --prod` inside the folder.
- **nginx, Apache, S3, or cPanel** — copy the folder contents into the server root (for example `public_html`).

Two host settings matter:

1. Map the host's 404 page to `404.html` so unknown URLs show the site's own 404 page.
2. Serve the site from the domain root (`example.com`), not a subfolder. Asset URLs start with `/`, so a subfolder breaks them.

## Run with Docker

Every push to `main` publishes an image to the GitHub Container Registry. It contains the built site behind nginx, with the 404 page and cache headers already configured.

```sh
docker run -p 8080:80 ghcr.io/<owner>/shayna-website:latest
```

Then open http://localhost:8080. Versioned tags are published too, for example `ghcr.io/<owner>/shayna-website:0.1.0`.

To build the image yourself:

```sh
docker build -t shayna-website .
docker run -p 8080:80 shayna-website
```
