import { GALLERY, SITE } from "@/lib/site"

const ASPECTS = ["1 / 1", "4 / 5", "3 / 4", "2 / 3", "4 / 5", "3 / 4"]

export function Gallery() {
  return (
    <section id="gallery" className="shell pt-[clamp(72px,11vw,110px)] pb-10">
      <div className="mb-16 text-center">
        <h2
          data-reveal
          className="font-serif text-[clamp(34px,8vw,68px)] leading-[1.05] font-light tracking-[-0.015em]"
        >
          Some of our recent{" "}
          <span className="relative inline-block px-2.5">
            <em className="font-script text-[0.78em] not-italic">work</em>
          </span>
        </h2>
      </div>

      <div className="[column-gap:14px] [columns:clamp(150px,44vw,250px)]">
        {GALLERY.map((img, i) => (
          <a
            key={img.src}
            href={img.src}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            className="group mb-4 block break-inside-avoid overflow-hidden rounded-xl bg-muted"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              style={{ aspectRatio: ASPECTS[i % ASPECTS.length] }}
              className="w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </a>
        ))}
      </div>

      <div className="mt-9 flex justify-center">
        <a
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-script text-2xl text-brand-deep hover:text-foreground"
        >
          more on instagram →
        </a>
      </div>
    </section>
  )
}
