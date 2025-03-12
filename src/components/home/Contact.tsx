import { Github, Linkedin, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-foreground/80 mb-12">
            Interested in AI, entrepreneurship, or building impactful products? Let's chat.
          </p>

          <div className="flex justify-center items-center space-x-8">
            <a
              href="https://www.linkedin.com/in/noahmits/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-8 w-8 mb-2" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/nmits"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center hover:text-primary transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="h-8 w-8 mb-2" />
              <span className="text-sm">GitHub</span>
            </a>
            <a
              href="mailto:noah@favs.com"
              className="flex flex-col items-center hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-8 w-8 mb-2" />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
