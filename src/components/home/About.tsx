const stats = [
  { value: "2B+", label: "Events / month at Gimbal" },
  { value: "$1M", label: "Favs pre-seed" },
  { value: "3M+", label: "Requests / second" },
  { value: "USC", label: "CS + Business" },
];

export const About = () => {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow mb-4">About</p>
          <h2 className="display text-4xl text-[var(--pax-ink)] sm:text-5xl">
            Product first. Ads-trained. Still shipping.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-[var(--pax-ink-dim)]">
          <p>
            I build products that should feel like a person who already knows
            the trip. Pack is that bet.
          </p>
          <p>
            At Meta I led Health ads growth — called the second-largest growth
            area on earnings — then came back for GenAI and telco. At Portfolio
            Insider I was Chief of AI. At Google I worked ads relevance. At
            Gimbal I designed systems that ate two billion events a month.
          </p>
          <p>
            USC undergrad, CS and Business. Skiing, investing, entrepreneurship
            clubs. Unfortunately, didn&apos;t drop out.
          </p>
          <div className="pt-4">
            <p className="eyebrow mb-4">Also written</p>
            <ul className="space-y-3">
              <li>
                <a
                  className="text-[var(--pax-ink)] underline decoration-[var(--pax-clay)] underline-offset-4 hover:text-[var(--pax-gold)]"
                  href="https://www.forbes.com/sites/forbestechcouncil/2021/09/22/how-ai-will-democratize-access-to-investing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Forbes — How AI Will Democratize Access to Investing
                </a>
              </li>
              <li>
                <a
                  className="text-[var(--pax-ink)] underline decoration-[var(--pax-clay)] underline-offset-4 hover:text-[var(--pax-gold)]"
                  href="https://www.fastcompany.com/90689998/advice-on-building-great-products"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fast Company — Advice on Building Great Products
                </a>
              </li>
              <li>
                <a
                  className="text-[var(--pax-ink)] underline decoration-[var(--pax-clay)] underline-offset-4 hover:text-[var(--pax-gold)]"
                  href="https://www.newsweek.com/fighting-evolutions-mistakes-ensuring-equitable-hiring-machine-learning-1634661"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Newsweek — Equitable hiring with ML
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <dl className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-[var(--radius)] bg-[var(--pax-line)] sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[var(--pax-bg-raised)] p-6">
            <dt className="font-serif text-3xl text-[var(--pax-gold)]">
              {stat.value}
            </dt>
            <dd className="mt-2 text-sm text-[var(--pax-ink-mute)]">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
};
