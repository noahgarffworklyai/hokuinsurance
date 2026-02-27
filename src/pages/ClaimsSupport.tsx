import ServicePageLayout from "@/components/ServicePageLayout";
import { AlertCircle, FileSearch, MessageCircle, Scale, MapPin, Handshake, Clock, Heart } from "lucide-react";
import hawaiiBeach from "@/assets/hawaii-beach.jpg";

const stages = [
  { icon: AlertCircle, title: "Immediate Response & Guidance", desc: "From the moment a loss occurs, we are here to advise on the critical first steps—whether that's securing a property from further damage or documenting a liability incident." },
  { icon: FileSearch, title: "Expert Documentation Support", desc: "A successful claim depends on clear, accurate information. We help you gather the necessary evidence, photos, and records to present a professional and undeniable case to the insurance carrier." },
  { icon: MessageCircle, title: "Proactive Communication", desc: "One of the greatest frustrations in insurance is the \"black hole\" of waiting for updates. We act as the bridge between you and the carrier, providing regular status reports and ensuring your file remains a priority." },
  { icon: Scale, title: "Advocacy in Dispute Resolution", desc: "If a carrier's initial assessment doesn't align with the reality of your loss, we step in. We use our deep knowledge of policy language and local repair costs to advocate for the full benefits you are entitled to under your coverage." },
];

const differences = [
  { icon: MapPin, title: "Understanding the Hawaii Context", desc: "Claims in the islands come with unique logistical challenges. From the high cost of shipping materials to the specialized labor required for island-specific construction, we understand the local economy. We ensure that adjusters—who may be assessing your claim from thousands of miles away—account for the \"Hawaii factor\" in their valuations." },
  { icon: Handshake, title: "A Consultative Partnership", desc: "We treat every claim as a learning opportunity. Once a resolution is reached, we sit down with you to review the incident. This consultative approach helps us identify if adjustments are needed in your risk management strategies to prevent a similar occurrence in the future." },
  { icon: Clock, title: "Speed and Efficiency", desc: "Time is money, especially for a business facing a disruption. Our local presence allows us to move quickly, pushing for a timely resolution so you can focus on what matters most: getting back to work and moving forward with your life." },
  { icon: Heart, title: "Integrity and Fairness", desc: "Our goal is simple: to ensure you are treated fairly. We hold carriers accountable to the promises made in your policy, providing the professional weight and industry expertise necessary to level the playing field." },
];

const ClaimsSupport = () => {
  return (
    <ServicePageLayout title="Claims Support: Your Advocate in the Moments That Matter" subtitle="Claims Support" heroImage={hawaiiBeach}>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        When the unexpected happens, the value of an insurance policy is no longer found in the fine print of a contract—it is found in the quality of the support you receive. At Hoku Insurance, we understand that filing a claim can be one of the most stressful experiences for any business owner or resident. That is why we provide dedicated local claims advocacy to guide you through the process and ensure fair, timely resolution.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-12">
        In a world of automated phone trees and mainland call centers, Hoku Insurance stands apart by offering a human-centric, "Hōkūleʻa Star" approach to claims. We don't just hand you a carrier's 1-800 number and wish you luck; we step into the arena with you, acting as your professional advocate from the initial report to the final settlement.
      </p>

      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
        Navigating the Claims Journey
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        The path to recovery after a loss is often complex, involving adjusters, contractors, and extensive documentation. Our claims support team provides the expert guidance needed to navigate each stage:
      </p>
      <div className="grid sm:grid-cols-2 gap-5 mb-16">
        {stages.map((s) => (
          <div key={s.title} className="bg-card rounded-lg p-6 border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4">
              <s.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-base font-heading font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
        The Hoku Difference: Local Advocacy
      </h2>
      <div className="space-y-6 mb-16">
        {differences.map((d, i) => (
          <div key={d.title} className="flex gap-5">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-1">
              <d.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-base font-heading font-semibold text-foreground mb-1">{i + 1}. {d.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-lg p-8 lg:p-10 text-center">
        <h2 className="text-2xl font-heading font-bold text-white mb-4">You Don't Have to Walk the Path Alone</h2>
        <p className="text-white/70 leading-relaxed mb-6 max-w-2xl mx-auto">
          At Hoku Insurance, we take pride in being the steady hand during a storm. With our dedicated local claims advocacy, you can face the unexpected with the confidence that you have a partner committed to your recovery and your peace of mind.
        </p>
        <a href="/contact" className="inline-flex items-center gap-2 gradient-gold text-white px-7 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase rounded hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
          Contact Us
        </a>
      </div>
    </ServicePageLayout>
  );
};

export default ClaimsSupport;
