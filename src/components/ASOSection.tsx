import { Briefcase, DollarSign, ClipboardCheck, ShieldCheck } from "lucide-react";

const asoServices = [
  { icon: DollarSign, title: "Payroll Administration", desc: "Accurate, timely payroll processing with tax compliance." },
  { icon: Briefcase, title: "HR Management", desc: "Employee onboarding, benefits administration, and policy development." },
  { icon: ClipboardCheck, title: "Compliance", desc: "Stay current with federal, state, and local employment regulations." },
  { icon: ShieldCheck, title: "Risk & Safety", desc: "Workplace safety programs and workers' comp management." },
];

const ASOSection = () => {
  return (
    <section id="aso" className="py-20 lg:py-28 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3">Sister Company</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Administrative Services Organization
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            Beyond insurance, our ASO division helps businesses focus on growth by handling the complexities of HR, payroll, and compliance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {asoServices.map((svc) => (
            <div key={svc.title} className="bg-card rounded-lg p-6 text-center shadow-sm border border-border">
              <div className="w-14 h-14 mx-auto rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                <svc.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ASOSection;
