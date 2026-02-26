import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import hokuLogo from "@/assets/hoku-logo-new.png";

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
    "text-[13px] font-medium tracking-[0.15em] uppercase text-navy/65 hover:text-primary transition-colors duration-300";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          {/* Left links — right-aligned within their column */}
          <nav className="flex items-center justify-end gap-8">
            {leftLinks.map((l) => (
              <a key={l.label} href={l.href} className={linkClass}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Center logo */}
          <a href="#" className="flex items-center justify-center py-2">
            <img
              src={hokuLogo}
              alt="Hoku Insurance"
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? "h-[90px]" : "h-[140px]"
              }`}
            />
          </a>

          {/* Right links + CTA — left-aligned within their column */}
          <nav className="flex items-center justify-start gap-8">
            {rightLinks.map((l) => (
              <a key={l.label} href={l.href} className={linkClass}>
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 gradient-gold text-white px-5 py-2 text-[12px] font-semibold tracking-[0.15em] uppercase rounded-full shadow-sm hover:shadow-md hover:shadow-gold/25 transition-all duration-300 hover:scale-[1.03]"
            >
              Get a Quote
            </a>
          </nav>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center justify-between py-2">
          <a href="#" className="flex items-center">
            <img
              src={hokuLogo}
              alt="Hoku Insurance"
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled ? "h-[56px]" : "h-[72px]"
              }`}
            />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="text-navy/70 hover:text-primary transition-colors"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? "max-h-80 border-t border-navy/10" : "max-h-0"
        }`}
      >
        <nav className="bg-white px-6 py-4 space-y-1">
          {[...leftLinks, ...rightLinks].map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2.5 text-sm font-medium tracking-wider uppercase text-navy/65 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 text-center gradient-gold text-white px-5 py-2.5 text-sm font-semibold tracking-wider uppercase rounded-full"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
