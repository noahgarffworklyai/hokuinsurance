import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import hokuLogo from "@/assets/hoku-logo.png";

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
          ? "bg-navy/98 backdrop-blur-lg shadow-2xl shadow-navy/30"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div
        className={`border-b border-white/5 transition-all duration-500 ${
          scrolled ? "max-h-0 overflow-hidden opacity-0 py-0" : "max-h-20 opacity-100"
        }`}
      >
        <div className="container flex items-center justify-end gap-6 py-2 text-sm text-gold-light/80">
          <a href="tel:+18085551234" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone className="h-3.5 w-3.5" />
            <span>(808) 555-1234</span>
          </a>
          <span className="hidden sm:flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            Kailua-Kona, HI
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center">
          <img src={hokuLogo} alt="Hoku Insurance" className="h-20 lg:h-24 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-body font-medium tracking-wider uppercase text-gold-light/80 hover:text-gold transition-colors after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="gradient-gold text-accent-foreground px-6 py-2.5 text-sm font-semibold tracking-wider uppercase rounded-full hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:scale-105"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gold-light"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-navy/98 backdrop-blur-lg border-t border-white/5 pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-sm font-medium tracking-wider uppercase text-gold-light/80 hover:text-gold hover:bg-white/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center gradient-gold text-accent-foreground px-5 py-2.5 text-sm font-semibold tracking-wider uppercase rounded-full"
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
