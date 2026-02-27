import ServicePageLayout from "@/components/ServicePageLayout";
import { Shield, Building2, Car, HardHat, FileText, Users, TrendingUp, MapPin, Search } from "lucide-react";
import businessTeam from "@/assets/business-team.jpg";

const offerings = [
  { icon: Shield, title: "General Liability", desc: "Protects your business from financial loss should you be liable for property damage or bodily injury." },
  { icon: Building2, title: "Commercial Property", desc: "Safeguards your physical assets, including buildings, inventory, and equipment, against fire, theft, and natural disasters." },
  { icon: HardHat, title: "Workers' Compensation", desc: "A legal necessity in Hawaii, this ensures your employees are taken care of in the event of a work-related injury or illness." },
  { icon: Car, title: "Commercial Auto", desc: "Coverage for vehicles used for business purposes, protecting your fleet and your drivers on the road." },
  { icon: FileText, title: "Professional Liability (E&O)", desc: "Critical for service providers, protecting you against claims of negligence or mistakes." },
];

const reasons = [
  { icon: Users, title: "A Consultative Partnership", desc: "We move beyond the \"order-taker\" model. We sit down with you to perform a deep-dive needs assessment, identifying hidden gaps in your current coverage and offering expert advice to bridge them." },
  { icon: Search, title: "The Power of Independence", desc: "As an independent agency, we aren't tied to a single carrier. We have the flexibility to shop the market on your behalf, comparing rates and terms from a wide stable of top-rated insurers." },
  { icon: MapPin, title: "Local Expertise & Advocacy", desc: "Based right here in Hawaii, we understand the local business climate and the specific regulatory requirements of the islands. If the unexpected happens, we act as your dedicated advocate." },
  { icon: TrendingUp, title: "Scalability for Growth", desc: "As your business evolves, your insurance needs will change. Whether you are hiring your first employee or expanding to a second location, we provide the proactive support needed to scale your coverage seamlessly." },
];

const CommercialInsurance = () => {
  return (
    <ServicePageLayout title="Commercial Insurance: Protecting the Heart of Your Business" subtitle="Insurance Solutions" heroImage={businessTeam}>
      <p className="text-muted-foreground leading-relaxed mb-6">
        At Hoku Insurance, we believe that your business is more than just a source of income—it is a reflection of your hard work, dedication, and vision for the future. Whether you are a solo entrepreneur starting a boutique in Kailua-Kona or a large-scale operation with teams across the islands, protecting your assets is vital to your long-term success. We provide comprehensive coverage for businesses of all sizes—from general liability and property to workers' compensation and commercial auto.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-12">
        Navigating the complexities of the insurance landscape can be daunting. That is why we don't just sell policies; we partner with you. Our team takes a consultative, hands-on approach to ensure you understand your risks and the specific protections in place to mitigate them.
      </p>

      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
        Tailored Solutions for Every Industry
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        No two businesses are identical, and your insurance shouldn't be either. We specialize in crafting customized packages that address the unique exposures of your specific industry. Our core commercial offerings include:
      </p>
      <div className="grid sm:grid-cols-2 gap-5 mb-16">
        {offerings.map((o) => (
          <div key={o.title} className="bg-card rounded-lg p-6 border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4">
              <o.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-base font-heading font-semibold text-foreground mb-2">{o.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
        Why Choose Hoku Insurance?
      </h2>
      <div className="space-y-6 mb-16">
        {reasons.map((r, i) => (
          <div key={r.title} className="flex gap-5">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-1">
              <r.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-base font-heading font-semibold text-foreground mb-1">{i + 1}. {r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-lg p-8 lg:p-10 text-center">
        <h2 className="text-2xl font-heading font-bold text-white mb-4">Secure Your Legacy Today</h2>
        <p className="text-white/70 leading-relaxed mb-6 max-w-2xl mx-auto">
          Don't leave the future of your business to chance. Let the experts at Hoku Insurance provide the "Hokuleʻa Star" guidance you need to navigate your commercial insurance options with confidence.
        </p>
        <a href="/contact" className="inline-flex items-center gap-2 gradient-gold text-white px-7 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase rounded hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
          Get a Quote
        </a>
      </div>
    </ServicePageLayout>
  );
};

export default CommercialInsurance;
