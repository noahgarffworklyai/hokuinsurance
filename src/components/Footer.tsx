import { MapPin, Phone, Mail } from "lucide-react";
import hokuLogo from "@/assets/hoku-logo-new.png";
import constellation1 from "@/assets/constellation-1.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-foreground relative overflow-hidden">
      <img
        src={constellation1}
        alt=""
        className="absolute top-12 right-12 w-48 opacity-[0.06] pointer-events-none select-none rotate-180"
      />
      <div className="container py-20 relative">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <img src={hokuLogo} alt="Hoku Insurance" className="h-24 w-auto mb-6" />
            <p className="text-muted-foreground leading-relaxed">
              Full-service commercial and personal lines Property &amp; Casualty insurance agency serving Hawai'i with
              aloha.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {["Solutions", "About", "ASO Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "")}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-primary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  75-170 Hualalai Road A100
                  <br />
                  Kailua-Kona, HI 96740
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+18085551234" className="text-muted-foreground hover:text-primary transition-colors">
                  (808) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@hokuinsurance.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@hokuins.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Hoku Insurance, LLC. All rights reserved.</p>
          <p>Kailua-Kona, Hawai'i</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
