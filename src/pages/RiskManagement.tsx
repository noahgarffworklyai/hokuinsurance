import ServicePageLayout from "@/components/ServicePageLayout";
import { Search, ShieldCheck, Users, FileText, Handshake, TrendingDown, BarChart3, Award } from "lucide-react";
import riskStrategy from "@/assets/risk-strategy.jpg";

const pillars = [
  { icon: Search, title: "Comprehensive Risk Identification", desc: "We don't just look at the obvious. Our team conducts deep-dive assessments to identify \"hidden\" risks—from supply chain vulnerabilities in the middle of the Pacific to cyber-security gaps and physical safety hazards on your job site." },
  { icon: ShieldCheck, title: "Loss Control & Prevention", desc: "Once risks are identified, we provide actionable guidance on how to eliminate or mitigate them. This might include implementing new safety protocols, enhancing driver training for your commercial fleet, or advising on property retrofitting to withstand island weather extremes." },
  { icon: Users, title: "Safety Culture Development", desc: "A business is only as safe as its least-informed employee. We help you develop internal training programs and safety handbooks that empower your team to be your first line of defense." },
  { icon: FileText, title: "Contractual Risk Transfer", desc: "Often, the best way to manage risk is to ensure it stays where it belongs. We offer guidance on reviewing vendor contracts and lease agreements to ensure you aren't unknowingly assuming the liabilities of others." },
];

const whyUs = [
  { icon: Handshake, title: "A Consultative Partnership", desc: "We move beyond the role of a \"broker\" and step into the role of a \"consultant.\" Our relationship is built on regular check-ins and strategic planning sessions. We don't just hand you a folder of \"best practices\"; we sit down with you to see how those practices fit into the daily flow of your specific operations." },
  { icon: TrendingDown, title: "Reducing the Total Cost of Risk (TCOR)", desc: "Insurance premiums are only one part of your financial exposure. Deductibles, lost productivity, damage to your brand reputation, and increased future premiums all add up. By focusing on loss prevention, we help you lower your Total Cost of Risk, keeping more capital inside your business." },
  { icon: BarChart3, title: "Data-Driven Insights", desc: "We leverage modern risk modeling and claims data to show you exactly where your industry is most vulnerable. This allows us to prioritize the most critical threats first, ensuring your resources are spent where they will have the greatest impact on your safety." },
  { icon: Award, title: "Long-Term Stability", desc: "In a volatile insurance market, businesses with a proven track record of proactive risk management are the most \"insurable.\" By following our guidance to minimize claims, you position your business to receive the most competitive rates and broader coverage options from carriers." },
];

const RiskManagement = () => {
  return (
    <ServicePageLayout title="Risk Management: Your North Star for Business Resilience" subtitle="Risk Management" heroImage={riskStrategy}>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        At Hoku Insurance, we believe the most effective insurance policy is the one you never have to use. While traditional insurance reacts after a disaster has struck, true security is built on a foundation of foresight. We partner with you to implement proactive risk assessment and loss prevention strategies to protect your business before claims occur.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-12">
        In the unique landscape of Hawaii, where logistical hurdles and specific environmental factors can amplify a single mistake, a "wait and see" approach is a liability in itself. Our mission is to provide the guidance necessary to transform your business from a reactive entity into a resilient one.
      </p>

      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
        The Pillars of Proactive Risk Management
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Risk management is not a one-time audit; it is an ongoing cultural shift within your organization. Hoku Insurance provides the expert navigation to help you master these core areas:
      </p>
      <div className="grid sm:grid-cols-2 gap-5 mb-16">
        {pillars.map((p) => (
          <div key={p.title} className="bg-card rounded-lg p-6 border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4">
              <p.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-base font-heading font-semibold text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
        Why Guidance is Our Greatest Asset
      </h2>
      <div className="space-y-6 mb-16">
        {whyUs.map((w, i) => (
          <div key={w.title} className="flex gap-5">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-1">
              <w.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-base font-heading font-semibold text-foreground mb-1">{i + 1}. {w.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-lg p-8 lg:p-10 text-center">
        <h2 className="text-2xl font-heading font-bold text-white mb-4">Navigate with Confidence</h2>
        <p className="text-white/70 leading-relaxed mb-6 max-w-2xl mx-auto">
          Your business is your legacy. Don't leave its survival to chance. Let Hoku Insurance provide the expert guidance and proactive strategies you need to stay ahead of the curve and protected from the unexpected.
        </p>
        <a href="/contact" className="inline-flex items-center gap-2 gradient-gold text-white px-7 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase rounded hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
          Talk to an Expert
        </a>
      </div>
    </ServicePageLayout>
  );
};

export default RiskManagement;
