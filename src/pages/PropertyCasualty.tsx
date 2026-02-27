import ServicePageLayout from "@/components/ServicePageLayout";
import { CloudRain, Waves, Mountain, Flame, Shield, Umbrella, Phone } from "lucide-react";
import hawaiiProperty from "@/assets/hawaii-property.jpg";

const propertyItems = [
  { icon: CloudRain, title: "Hurricane & Windstorm", desc: "Standard homeowners' insurance often stops where a tropical storm begins. We help you secure dedicated hurricane coverage to protect against high-velocity winds and debris." },
  { icon: Waves, title: "Flood & Storm Surge", desc: "With heavy tropical rainfall and rising sea levels, flood insurance is a necessity, even outside of traditional flood zones. We navigate the latest 2026 FEMA map updates to ensure your coverage is accurate and compliant." },
  { icon: Mountain, title: "Lava & Seismic Coverage", desc: "For our residents on Hawaii Island, managing lava zone risks is a part of life. We provide expert guidance on securing property coverage in high-risk zones where other agencies may hesitate to tread." },
  { icon: Flame, title: "Wildfire Mitigation", desc: "Following the devastating events in Lahaina, wildfire risk has reshaped the P&C market. We work with you to ensure your property is valued correctly for the high costs of island reconstruction." },
];

const casualtyItems = [
  { icon: Shield, title: "General Liability", desc: "Whether for a property you own or a business you run, we provide a shield against claims of bodily injury or property damage." },
  { icon: Umbrella, title: "Personal & Commercial Umbrella", desc: "Because island jury awards can be substantial, we often recommend \"excess\" liability layers to ensure one accident doesn't jeopardize your lifetime of assets." },
  { icon: Phone, title: "Local Claims Advocacy", desc: "If a loss occurs, you aren't calling a mainland automated line. You are calling a local partner who understands the logistics of island repairs, from shipping delays to specialized contractor availability." },
];

const PropertyCasualty = () => {
  return (
    <ServicePageLayout title="Property & Casualty: Specialized Solutions for Island Life" subtitle="P&C Insurance" heroImage={hawaiiProperty}>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        At Hoku Insurance, we recognize that living in Hawaii requires a different level of vigilance. Our unique geography—thousands of miles from the nearest continent—creates a beautiful but complex environment for property owners. To truly protect your investments, you need more than a standard policy; you need specialized P&C solutions that account for the unique risks of island living, from natural disasters to liability.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-12">
        From the volcanic activity on the Big Island to the hurricane tracks that skirt our coasts, the "perils" we face here are distinct. We don't just provide insurance; we provide a localized risk-management strategy designed to weather the literal and metaphorical storms of the Pacific.
      </p>

      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
        Navigating the Elements: Property Protection
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Property insurance in Hawaii is not a "one-size-fits-all" product. Many standard policies from national carriers have significant exclusions for the very risks that are most prevalent in the islands. At Hoku, we specialize in bridging those gaps:
      </p>
      <div className="grid sm:grid-cols-2 gap-5 mb-16">
        {propertyItems.map((p) => (
          <div key={p.title} className="bg-card rounded-lg p-6 border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4">
              <p.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-base font-heading font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
        The Shield: Comprehensive Casualty & Liability
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Casualty insurance is about protecting your financial future from the "what-ifs" of human error and legal action. In a state with high medical costs and unique liability laws, having the right limits is essential.
      </p>
      <div className="space-y-5 mb-16">
        {casualtyItems.map((c) => (
          <div key={c.title} className="flex gap-5 bg-card rounded-lg p-6 border border-border">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
              <c.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-base font-heading font-semibold text-foreground mb-1">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-lg p-8 lg:p-10">
        <h2 className="text-2xl font-heading font-bold text-white mb-4">Why the "Hoku" Way Matters</h2>
        <p className="text-white/70 leading-relaxed mb-6">
          The word Hoku refers to a star—a point of navigation. In a 2026 insurance market characterized by rising premiums and retreating carriers, we act as your Hōkūleʻa Star. As an independent agency, we have the local relationships and market access to find stable, high-quality coverage when the "big name" insurers pull back. We take a consultative, hands-on approach to ensure you aren't just paying a premium, but actually securing your legacy.
        </p>
        <a href="/contact" className="inline-flex items-center gap-2 gradient-gold text-white px-7 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase rounded hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
          Get a Quote
        </a>
      </div>
    </ServicePageLayout>
  );
};

export default PropertyCasualty;
