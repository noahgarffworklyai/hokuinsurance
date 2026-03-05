import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import hokuLogo from "@/assets/hoku-logo-new.png";

const quickLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "About", href: "/about" },
  { label: "ASO Services", href: "/aso-services" },
  { label: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-background relative">
      <div className="container"><div className="border-t border-border/50" /></div>
      <div className="container py-20">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <img src={hokuLogo} alt="Hoku Insurance" className="h-16 w-auto mb-6" loading="lazy" decoding="async" />
            <p className="text-muted-foreground text-sm leading-[1.8]">
              Full-service commercial and personal lines Property &amp; Casualty insurance agency serving Hawaii with
              Aloha.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-[0.25em] uppercase text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-[0.25em] uppercase text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="https://maps.google.com/?q=75-170+Hualalai+Rd+Ste+A100,+Kailua-Kona,+HI+96740" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  75-170 Hualalai Road A100
                  <br />
                  Kailua-Kona, HI 96740
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+18088097670" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  (808) 809-7670
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@hokuinsurance.com" className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300">
                  info@hokuins.com
                </a>
              </li>
              <li className="flex items-start gap-3 pt-3 border-t border-border/30 mt-1">
                <span className="text-muted-foreground text-sm">
                  To pay your bill, please call us.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground/70">
          <p>&copy; {new Date().getFullYear()} Hoku Insurance, LLC. All rights reserved.</p>
          <p>Kailua-Kona, Hawaii</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
