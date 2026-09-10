export function Awards() {
  return (
    <section className="shell grid items-center gap-[clamp(38px,6vw,56px)] py-[clamp(72px,11vw,110px)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr))]">
      <div
        data-reveal
        className="overflow-hidden rounded-2xl bg-muted"
      >
        <img
          src="/images/award.jpg"
          alt="Award for Shayna's Nails & Spa"
          loading="lazy"
          className="h-auto w-full"
        />
      </div>
      <div>
        <div className="mb-1.5 font-script text-[clamp(46px,10vw,86px)] leading-none">
          Nailed It
        </div>
        <h2 className="mb-5 font-serif text-[clamp(31px,7vw,54px)] leading-[1.05] font-light tracking-[-0.015em]">
          Awards & accolades
        </h2>
        <p className="max-w-[440px] text-base leading-[1.7] font-light text-muted-foreground [text-wrap:pretty]">
          Recognised locally for the work that leaves this studio — and still
          run the same way it always has been, one guest at a time.
        </p>
      </div>
    </section>
  )
}
