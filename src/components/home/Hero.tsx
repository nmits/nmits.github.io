export const Hero = () => {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end px-6 pb-20 pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 50% at 80% 0%, rgba(196,108,77,0.18), transparent 55%), radial-gradient(60% 40% at 10% 80%, rgba(243,210,122,0.08), transparent 50%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-5xl">
        <p className="eyebrow mb-8">Now · Pack</p>
        <h1 className="display max-w-4xl text-5xl text-[var(--pax-ink)] sm:text-7xl md:text-8xl">
          A free travel agent
          <span className="italic text-[var(--pax-gold)]"> for everyone.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--pax-ink-dim)] sm:text-xl">
          Noah Mitsuhashi. Building Pack. Before that: ads and AI at Meta and
          Google.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-[var(--pax-gold)] px-6 py-3 text-sm font-medium text-[var(--pax-bg)] transition-transform duration-500 ease-[var(--pax-ease)] hover:-translate-y-0.5"
          >
            Selected work
          </a>
          <a
            href="https://www.trypackai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--pax-line)] px-6 py-3 text-sm text-[var(--pax-ink)] transition-colors hover:border-[var(--pax-gold)] hover:text-[var(--pax-gold)]"
          >
            trypackai.com
          </a>
        </div>
      </div>
    </section>
  );
};
