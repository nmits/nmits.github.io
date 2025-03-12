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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background z-0"></div>

      {/* Animated circle decoration */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse opacity-30"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 fade-in-section">
            Co-founder @ Favs
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-section animation-delay-100">
            <span className="text-gradient">Noah Mitsuhashi</span>
          </h1>
          
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-10 fade-in-section animation-delay-200">
            Tech leader and entrepreneur building the future of social networking. Previously led AI initiatives and platform growth at Meta, Google, and Portfolio Insider.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 fade-in-section animation-delay-300">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
            >
              View Experience
            </a>
            <a
              href="https://www.linkedin.com/in/noahmits/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNextSection}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/60 hover:text-foreground transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </div>
  );
};
