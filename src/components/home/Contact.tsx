import { Github, Linkedin, Mail } from "lucide-react";

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
                <Linkedin className="h-8 w-8 mb-2 transition-transform duration-200 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/nmits"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center hover:text-primary transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <div className="relative">
                <Github className="h-8 w-8 mb-2 transition-transform duration-200 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a
              href="mailto:me@noahmitsuhashi.io"
              className="group flex flex-col items-center hover:text-primary transition-all duration-200"
              aria-label="Email"
            >
              <div className="relative">
                <Mail className="h-8 w-8 mb-2 transition-transform duration-200 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-150 transition-transform duration-300 -z-10"></div>
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};
