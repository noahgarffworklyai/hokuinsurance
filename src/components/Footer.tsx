import { MapPin, Phone, Mail } from "lucide-react";
import hokuLogo from "@/assets/hoku-logo-new.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-gold-light">
      <div className="container py-20">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <img src={hokuLogo} alt="Hoku Insurance" className="h-24 w-auto rounded-lg mb-6" />
            <p className="text-gold-light/60 leading-relaxed">
              Full-service commercial and personal lines Property &amp; Casualty insurance agency serving Hawai'i with aloha.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-gradient-gold">Quick Links</h4>
            <ul className="space-y-3">
              {["Solutions", "About", "ASO Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "")}`}
                    className="text-gold-light/60 hover:text-gold transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-gradient-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-gold-light/60">
                  75-170 Hualalai Road A100<br />
                  Kailua-Kona, HI 96740
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <a href="tel:+18085551234" className="text-gold-light/60 hover:text-gold transition-colors">
                  (808) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <a href="mailto:info@hokuinsurance.com" className="text-gold-light/60 hover:text-gold transition-colors">
                  info@hokuinsurance.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gold-light/40">
          <p>&copy; {new Date().getFullYear()} Hoku Insurance, LLC. All rights reserved.</p>
          <p>Kailua-Kona, Hawai'i</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
