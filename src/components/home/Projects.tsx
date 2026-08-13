const work = [
  {
    year: "Now",
    title: "Pack",
    description:
      "A free AI travel agent. One trip, one plan — flights, stays, and the rest of the itinerary without the OTA tax.",
    href: "https://www.trypackai.com",
    tags: ["Founder", "Product", "AI"],
  },
  {
    year: "Meta",
    title: "GenAI and Telco",
    description:
      "Owned Telecommunications and GenAI monetization — creative, agents, advertiser-preference quality. Tech advertisers.",
    href: "https://www.facebook.com/business/news/generative-ai-features-for-ads-coming-to-all-advertisers",
    tags: ["Ads", "GenAI"],
  },
  {
    year: "Favs",
    title: "Close-friends social",
    description:
      "Co-founded a network that keeps online time to minutes a day. Raised about $1M pre-seed.",
    href: "https://investitin.com/stealth-startup-favs-raises-1-million-for-its-close-friends-only-social-network/",
    tags: ["Founder", "iOS"],
  },
  {
    year: "Meta",
    title: "Health vertical growth",
    description:
      "Led Health ads growth — called out as the second-largest growth area on 2022 Q4 and 2023 Q1 earnings. Co-built a U.S. dynamic-ads program.",
    href: "https://investor.fb.com/home/default.aspx",
    tags: ["Growth", "Ads"],
  },
  {
    year: "PI",
    title: "Portfolio Insider",
    description:
      "Chief of AI. GPT-3 tools that strip jargon from market data so people can actually read a stock pick.",
    href: "https://www.portfolioinsider.com/",
    tags: ["GPT-3", "Fintech"],
  },
  {
    year: "Gimbal",
    title: "Event pipeline",
    description:
      "Architected pipelines at 2B+ events a month and 3M+ requests/sec. Location analytics at petabyte scale.",
    href: "https://www.infillion.com/",
    tags: ["Data", "Systems"],
  },
  {
    year: "Google",
    title: "Ads relevance",
    description:
      "Machine learning for ad relevance. Pipelines and cleaning for AI-driven advertising products.",
    href: "https://ads.google.com/",
    tags: ["ML", "Ads"],
  },
];

export const Projects = () => {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-4">Selected work</p>
        <h2 className="display mb-16 max-w-2xl text-4xl text-[var(--pax-ink)] sm:text-5xl">
          Places I shipped things that moved a number.
        </h2>
        <ol className="divide-y divide-[var(--pax-line)] border-y border-[var(--pax-line)]">
          {work.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 py-8 transition-colors sm:grid-cols-[5.5rem_1fr_auto] sm:items-baseline"
              >
                <span className="eyebrow text-[var(--pax-clay)]">{item.year}</span>
                <div>
                  <h3 className="font-serif text-2xl text-[var(--pax-ink)] transition-colors group-hover:text-[var(--pax-gold)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[var(--pax-ink-dim)]">
                    {item.description}
                  </p>
                  <p className="mt-3 text-xs tracking-wide text-[var(--pax-ink-mute)]">
                    {item.tags.join(" · ")}
                  </p>
                </div>
                <span className="hidden text-sm text-[var(--pax-gold)] opacity-0 transition-opacity group-hover:opacity-100 sm:block">
                  Open
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
