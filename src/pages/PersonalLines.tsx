import ServicePageLayout from "@/components/ServicePageLayout";
import { Home, Car, CloudRain, Umbrella, Building, MapPin, Search, Users, Phone } from "lucide-react";
import hawaiiHome from "@/assets/hawaii-home.jpg";

const coverages = [
  { icon: Home, title: "Homeowners Insurance", desc: "Your home is likely your most significant asset. We offer robust coverage that accounts for Hawaii's specific environmental factors, ensuring your dwelling and personal property are protected against fire, theft, and liability." },
  { icon: Building, title: "Condo & Renters Insurance", desc: "Even if you don't own the building, your belongings and your personal liability need protection. Our tailored policies fill the gaps left by association master policies." },
  { icon: Car, title: "Auto Insurance", desc: "From the H-1 to the winding roads of the Hana Highway, we provide auto coverage that keeps you compliant with state laws while offering the high limits you need for true peace of mind." },
  { icon: CloudRain, title: "Hurricane & Flood", desc: "Standard homeowners policies often exclude these critical perils. We specialize in securing the supplemental coverage necessary to protect your equity during Hawaii's storm seasons." },
  { icon: Umbrella, title: "Personal Umbrella Liability", desc: "For an extra layer of security, an umbrella policy provides high-limit protection that kicks in when your primary auto or home liability limits are exhausted." },
];

const advantages = [
  { icon: MapPin, title: "Local Expertise for Island Living", desc: "We don't just work here; we live here. We understand the nuances of different neighborhoods, from the salt air of the coastline to the moisture of the valleys. This local knowledge allows us to recommend coverage that is actually relevant to your lifestyle." },
  { icon: Search, title: "Independent Choice, Better Value", desc: "As an independent agency, Hoku Insurance works for you, not a specific insurance corporation. We have the freedom to shop among multiple highly-rated carriers to find the best balance of comprehensive protection and competitive premiums." },
  { icon: Users, title: "A Consultative Relationship", desc: "Insurance shouldn't be a \"set it and forget it\" transaction. As your life changes—whether you're buying a new home, getting married, or welcoming a new driver to the family—we are here to adjust your coverage accordingly." },
  { icon: Phone, title: "Dedicated Claims Advocacy", desc: "If the worst happens, you won't be directed to a nameless call center on the mainland. The team at Hoku Insurance stands by your side, acting as your advocate throughout the claims process." },
];

const PersonalLines = () => {
  return (
    <ServicePageLayout title="Personal Insurance: Protecting What Matters Most in Hawaii" subtitle="Personal Lines" heroImage={hawaiiHome}>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        At Hoku Insurance, we understand that your home, your car, and your personal possessions represent more than just financial investments—they are the foundation of your life here in the islands. Living in Hawaii brings unique joys, from the North Shore swells to the quiet beauty of upcountry living, but it also brings unique risks. That is why we are committed to helping you protect your home, auto, and personal assets with tailored policies designed for Hawaii residents.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-12">
        Generic, one-size-fits-all insurance often fails to account for the specific needs of our local community. Whether it's navigating the complexities of hurricane signatures, lava zone requirements, or the high costs of vehicle repair in the middle of the Pacific, you need an insurance partner who speaks the local language of risk.
      </p>

      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
        Comprehensive Personal Coverage
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        We provide a full suite of personal lines insurance to ensure every aspect of your life is shielded from the unexpected:
      </p>
      <div className="grid sm:grid-cols-2 gap-5 mb-16">
        {coverages.map((c) => (
          <div key={c.title} className="bg-card rounded-lg p-6 border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4">
              <c.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-base font-heading font-semibold text-foreground mb-2">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
        The Hoku Advantage: A Personal Approach
      </h2>
      <div className="space-y-6 mb-16">
        {advantages.map((a) => (
          <div key={a.title} className="flex gap-5">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-1">
              <a.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-base font-heading font-semibold text-foreground mb-1">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-lg p-8 lg:p-10 text-center">
        <h2 className="text-2xl font-heading font-bold text-white mb-4">Secure Your Peace of Mind</h2>
        <p className="text-white/70 leading-relaxed mb-6 max-w-2xl mx-auto">
          Let us help you navigate the complexities of personal insurance with the "Hōkūleʻa Star" guidance you deserve. At Hoku Insurance, we are proud to protect the families and the future of Hawaii.
        </p>
        <a href="/contact" className="inline-flex items-center gap-2 gradient-gold text-white px-7 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase rounded hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
          Get a Quote
        </a>
      </div>
    </ServicePageLayout>
  );
};

export default PersonalLines;
