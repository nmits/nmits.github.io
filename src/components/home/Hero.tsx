import { ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".fade-in-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToNextSection = () => {
    const nextSection = heroRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/15 via-background to-background z-0"></div>

      {/* Soft glow — same orbs, warmer tint */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse opacity-30"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 fade-in-section">
            Forward Deployed & Product Engineer
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-section animation-delay-100 tracking-tight">
            <span className="text-gradient bg-clip-text text-transparent">Noah Mitsuhashi</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10 fade-in-section animation-delay-200 leading-relaxed">
            Entrepreneur obsessed with product and growth. Ads and AI at Meta and Google.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 fade-in-section animation-delay-300">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              View Experience
            </a>
            <a
              href="https://www.linkedin.com/in/nmits/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-200 font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="scroll-nudge absolute bottom-10 left-1/2 text-foreground/60 hover:text-foreground transition-colors duration-200"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </div>
  );
};
