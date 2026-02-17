import { useState } from "react";
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm">
      {/* Top bar */}
      <div className="border-b border-navy-light/40">
        <div className="container flex items-center justify-end gap-6 py-2 text-sm text-gold-light">
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
      <div className="container flex items-center justify-between py-3">
        <a href="#" className="flex items-center">
          <img src={hokuLogo} alt="Hoku Insurance" className="h-14 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-body font-semibold tracking-widest uppercase text-gold-light hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold tracking-wider uppercase rounded hover:brightness-110 transition-all"
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
        <nav className="md:hidden bg-navy border-t border-navy-light/40 pb-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block px-6 py-3 text-sm font-semibold tracking-widest uppercase text-gold-light hover:text-gold hover:bg-navy-light/30 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold tracking-wider uppercase rounded"
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
