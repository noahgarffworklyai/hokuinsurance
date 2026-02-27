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
    <footer className="bg-white relative pt-8">
      <div className="container"><div className="border-t border-border" /></div>
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={hokuLogo} alt="Hoku Insurance" className="h-20 w-auto mb-5" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-service commercial and personal lines Property &amp; Casualty insurance agency serving Hawaii with
              aloha.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-[0.1em] uppercase text-foreground mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-[0.1em] uppercase text-foreground mb-5">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  75-170 Hualalai Road A100
                  <br />
                  Kailua-Kona, HI 96740
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+18084944451" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  (808) 494-4451
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@hokuinsurance.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  info@hokuins.com
                </a>
              </li>
              <li className="flex items-start gap-3 pt-2 border-t border-border/30 mt-2">
                <span className="text-muted-foreground text-sm">
                  To pay your bill, please call us.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hoku Insurance, LLC. All rights reserved.</p>
          <p>Kailua-Kona, Hawaii</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
