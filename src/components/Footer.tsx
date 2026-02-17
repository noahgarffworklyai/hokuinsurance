import { MapPin, Phone, Mail } from "lucide-react";
import hokuLogo from "@/assets/hoku-logo.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-gold-light">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img src={hokuLogo} alt="Hoku Insurance" className="h-16 w-auto mb-4" />
            <p className="text-gold-light/70 leading-relaxed">
              Full-service commercial and personal lines Property &amp; Casualty insurance agency serving Hawai'i with aloha.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2.5">
              {["Solutions", "About", "ASO Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "")}`}
                    className="text-gold-light/70 hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-gold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-gold-light/70">
                  75-170 Hualalai Road A100<br />
                  Kailua-Kona, HI 96740
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+18085551234" className="text-gold-light/70 hover:text-gold transition-colors">
                  (808) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@hokuinsurance.com" className="text-gold-light/70 hover:text-gold transition-colors">
                  info@hokuinsurance.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light/40">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gold-light/50">
          <p>&copy; {new Date().getFullYear()} Hoku Insurance, LLC. All rights reserved.</p>
          <p>Kailua-Kona, Hawai'i</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
