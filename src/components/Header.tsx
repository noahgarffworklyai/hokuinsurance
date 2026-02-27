import { useState, useEffect, useRef } from "react";
import { Menu, X, MapPin, Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import hokuLogo from "@/assets/hoku-logo-new.png";
import hawaiiIsland from "@/assets/hawaii-island-stars.png";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const leftLinks: NavItem[] = [
    {
      label: "Solutions",
      href: "/#solutions",
      children: [
        { label: "Commercial Insurance", href: "/commercial-insurance" },
        { label: "Personal Lines", href: "/personal-lines" },
        { label: "Property & Casualty", href: "/property-casualty" },
        { label: "Risk Management", href: "/risk-management" },
        { label: "Claims Support", href: "/claims-support" },
      ],
    },
    { label: "About", href: "/about" },
  ];

  const rightLinks: NavItem[] = [
    { label: "ASO Services", href: "/aso-services" },
    { label: "Contact", href: "/contact" },
  ];

  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

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
            <a href="https://www.google.com/maps/place/75-170+Hualalai+Rd+Ste+A100,+Kailua-Kona,+HI+96740" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <MapPin className="h-3 w-3" />
              75-170 Hualalai Rd Ste A100, Kailua-Kona, HI 96740
            </a>
            <a href="tel:+18084944451" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone className="h-3 w-3" />
              (808) 494-4451
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
            <Link
              to="/contact"
              className="absolute right-0 gradient-gold text-white px-5 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase rounded hover:shadow-md hover:shadow-accent/20 transition-all duration-300"
            >
              Get a Quote
            </Link>

            <nav className="flex items-center justify-end gap-8">
              {leftLinks.map((l) => (
                <div
                  key={l.label}
                  className="relative"
                  onMouseEnter={() => l.children && handleMouseEnter(l.label)}
                  onMouseLeave={l.children ? handleMouseLeave : undefined}
                >
                  <Link to={l.href} className={`${linkClass} flex items-center gap-1`}>
                    {l.label}
                    {l.children && <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${openDropdown === l.label ? "rotate-180" : ""}`} />}
                  </Link>
                  {l.children && openDropdown === l.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                      <div className="bg-white rounded-lg shadow-lg border border-border/50 py-2 min-w-[220px]">
                        {l.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <Link to="/" className="flex items-center justify-center py-2">
              <img
                src={hokuLogo}
                alt="Hoku Insurance"
                className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-[65px]" : "h-[85px]"}`}
              />
            </Link>

            <nav className="flex items-center justify-start gap-8">
              {rightLinks.map((l) => (
                <Link key={l.label} to={l.href} className={linkClass}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center justify-between py-2">
            <Link to="/" className="flex items-center">
              <img
                src={hokuLogo}
                alt="Hoku Insurance"
                className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-[48px]" : "h-[64px]"}`}
              />
            </Link>
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
            mobileOpen ? "max-h-[500px] border-t border-border" : "max-h-0"
          }`}
        >
          <nav className="bg-white px-6 py-4 space-y-1">
            {[...leftLinks, ...rightLinks].map((l) => (
              <div key={l.label}>
                {l.children ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === l.label ? null : l.label)}
                      className="flex items-center justify-between w-full py-2.5 text-sm font-medium tracking-wider uppercase text-foreground/50 hover:text-primary transition-colors"
                    >
                      {l.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileExpanded === l.label ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ${mobileExpanded === l.label ? "max-h-96" : "max-h-0"}`}>
                      <div className="pl-4 pb-2 space-y-1">
                        {l.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            onClick={() => { setMobileOpen(false); setMobileExpanded(null); }}
                            className="block py-2 text-sm text-foreground/60 hover:text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-sm font-medium tracking-wider uppercase text-foreground/50 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center gradient-gold text-white px-5 py-2.5 text-sm font-semibold tracking-wider uppercase rounded"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
