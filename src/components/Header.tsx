import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import hokuLogo from "@/assets/hoku-logo-new.png";

const navItems = [
  { label: "Solutions", href: "#solutions" },
  { label: "About", href: "#about" },
  { label: "ASO Services", href: "#aso" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      {/* Top utility bar */}
      <div
        className={`border-b border-navy/10 transition-all duration-500 ${
          scrolled ? "max-h-0 overflow-hidden opacity-0 py-0" : "max-h-20 opacity-100"
        }`}
      >
        <div className="container flex items-center justify-end gap-6 py-1.5 text-xs text-navy/60">
          <a href="tel:+18085551234" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="h-3 w-3" />
            <span>(808) 555-1234</span>
          </a>
          <span className="hidden sm:flex items-center gap-1.5">
            <MapPin className="h-3 w-3" />
            Kailua-Kona, HI
          </span>
        </div>
      </div>

      {/* Main nav - centered logo layout */}
      <div className="container relative flex items-center justify-center py-1">
        {/* Left nav items - desktop */}
        <nav className="hidden md:flex items-center gap-6 absolute left-4 lg:left-8">
          {navItems.slice(0, 2).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-xs font-body font-medium tracking-wider uppercase text-navy/70 hover:text-primary transition-colors after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Centered logo */}
        <a href="#" className="flex items-center justify-center">
          <img
            src={hokuLogo}
            alt="Hoku Insurance"
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-[70px] lg:h-[80px]" : "h-[100px] lg:h-[120px]"
            }`}
          />
        </a>

        {/* Right nav items + CTA - desktop */}
        <nav className="hidden md:flex items-center gap-6 absolute right-4 lg:right-8">
          {navItems.slice(2).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-xs font-body font-medium tracking-wider uppercase text-navy/70 hover:text-primary transition-colors after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gradient-gold text-white px-5 py-2 text-xs font-semibold tracking-wider uppercase rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:scale-105"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy absolute right-4"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white/98 backdrop-blur-lg border-t border-navy/10 pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-sm font-medium tracking-wider uppercase text-navy/70 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center gradient-gold text-white px-5 py-2.5 text-sm font-semibold tracking-wider uppercase rounded-full"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
