export const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-[var(--radius)] bg-[var(--pax-bg-raised)] px-8 py-16 sm:px-16">
        <p className="eyebrow mb-4">Contact</p>
        <h2 className="display max-w-2xl text-4xl text-[var(--pax-ink)] sm:text-6xl">
          If you want to talk product, ads, or a trip —
        </h2>
        <div className="mt-10 flex flex-wrap gap-8 text-lg">
          <a
            className="text-[var(--pax-gold)] hover:underline"
            href="mailto:me@noahmitsuhashi.io"
          >
            me@noahmitsuhashi.io
          </a>
          <a
            className="text-[var(--pax-ink-dim)] hover:text-[var(--pax-gold)]"
            href="https://www.linkedin.com/in/nmits/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="text-[var(--pax-ink-dim)] hover:text-[var(--pax-gold)]"
            href="https://github.com/nmits"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
