import { useState, useEffect } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";
import hokuLogo from "@/assets/hoku-logo-new.png";
import hawaiiIsland from "@/assets/hawaii-island-stars.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const leftLinks = [
    { label: "Solutions", href: "#solutions" },
    { label: "About", href: "#about" },
  ];

  const rightLinks = [
    { label: "ASO Services", href: "#aso" },
    { label: "Contact", href: "#contact" },
  ];

  const linkClass =
    "text-[13px] font-medium tracking-[0.15em] uppercase text-foreground/50 hover:text-primary transition-colors duration-200";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top info bar */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="bg-primary text-white">
          <div className="container py-1.5 flex items-center justify-between text-[11px] font-medium tracking-wide">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              75-170 Hualalai Rd Ste A100, Kailua-Kona, HI 96740
            </span>
            <a href="tel:+18085551234" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone className="h-3 w-3" />
              (808) 555-1234
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-white"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          {/* Desktop */}
          <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-4 relative">
            <img
              src={hawaiiIsland}
              alt=""
              className={`absolute left-0 w-auto object-contain opacity-50 transition-all duration-300 ${
                scrolled ? "h-12" : "h-16"
              }`}
            />
            <a
              href="#contact"
              className="absolute right-0 gradient-gold text-white px-5 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase rounded hover:shadow-md hover:shadow-accent/20 transition-all duration-300"
            >
              Get a Quote
            </a>

            <nav className="flex items-center justify-end gap-8">
              {leftLinks.map((l) => (
                <a key={l.label} href={l.href} className={linkClass}>
                  {l.label}
                </a>
              ))}
            </nav>

            <a href="#" className="flex items-center justify-center py-2">
              <img
                src={hokuLogo}
                alt="Hoku Insurance"
                className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-[65px]" : "h-[85px]"}`}
              />
            </a>

            <nav className="flex items-center justify-start gap-8">
              {rightLinks.map((l) => (
                <a key={l.label} href={l.href} className={linkClass}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center justify-between py-2">
            <a href="#" className="flex items-center">
              <img
                src={hokuLogo}
                alt="Hoku Insurance"
                className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-[48px]" : "h-[64px]"}`}
              />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-96 border-t border-border" : "max-h-0"
          }`}
        >
          <nav className="bg-white px-6 py-4 space-y-1">
            {[...leftLinks, ...rightLinks].map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2.5 text-sm font-medium tracking-wider uppercase text-foreground/50 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center gradient-gold text-white px-5 py-2.5 text-sm font-semibold tracking-wider uppercase rounded"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
