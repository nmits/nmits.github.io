
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/#projects" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "backdrop-blur-xl bg-background/80 shadow-md shadow-black/5"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-medium text-gradient">
            Noah<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-sm text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1.5 p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "w-6 h-px bg-foreground transition-transform duration-300",
                mobileMenuOpen && "translate-y-[0.375rem] rotate-45"
              )}
            ></span>
            <span
              className={cn(
                "w-6 h-px bg-foreground transition-opacity duration-300",
                mobileMenuOpen && "opacity-0"
              )}
            ></span>
            <span
              className={cn(
                "w-6 h-px bg-foreground transition-transform duration-300",
                mobileMenuOpen && "-translate-y-[0.375rem] -rotate-45"
              )}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={cn(
          "md:hidden absolute left-0 right-0 bg-background/95 backdrop-blur-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "max-h-[400px] border-b border-white/10" : "max-h-0"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-foreground/80 hover:text-foreground py-2 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
