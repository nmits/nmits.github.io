import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,border] duration-500",
        scrolled
          ? "border-b border-[var(--pax-line)] bg-[color:var(--pax-bg)]/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#top" className="eyebrow text-[var(--pax-ink)]">
          Noah Mitsuhashi
        </a>
        <nav className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[var(--pax-ink-dim)] transition-colors duration-300 hover:text-[var(--pax-gold)]"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a
          href="mailto:me@noahmitsuhashi.io"
          className="text-sm text-[var(--pax-gold)] transition-opacity hover:opacity-80"
        >
          Email
        </a>
      </div>
    </header>
  );
};
