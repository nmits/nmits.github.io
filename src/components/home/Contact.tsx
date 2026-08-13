const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
    <path
      fill="currentColor"
      d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3z"
    />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden>
    <path
      fill="currentColor"
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
    />
  </svg>
);

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4">
        <div className="max-w-[520px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-12">
            Interested in AI, entrepreneurship, or building impactful products? Let's chat.
          </p>

          <nav className="grid grid-cols-3 gap-8">
            <a
              href="https://www.linkedin.com/in/nmits/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center hover:text-primary transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <div className="relative">
                <LinkedInIcon />
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
              </div>
              <span className="mt-2 text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/nmits"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center hover:text-primary transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <div className="relative">
                <GitHubIcon />
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
              </div>
              <span className="mt-2 text-sm font-medium">GitHub</span>
            </a>
            <a
              href="mailto:me@noahmitsuhashi.io"
              className="group flex flex-col items-center hover:text-primary transition-all duration-200"
              aria-label="Email"
            >
              <div className="relative">
                <EmailIcon />
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
              </div>
              <span className="mt-2 text-sm font-medium">Email</span>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};
