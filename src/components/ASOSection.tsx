import { Briefcase, DollarSign, ClipboardCheck, ShieldCheck } from "lucide-react";

const asoServices = [
  { icon: DollarSign, title: "Payroll Administration", desc: "Accurate, timely payroll processing with tax compliance." },
  { icon: Briefcase, title: "HR Management", desc: "Employee onboarding, benefits administration, and policy development." },
  { icon: ClipboardCheck, title: "Compliance", desc: "Stay current with federal, state, and local employment regulations." },
  { icon: ShieldCheck, title: "Risk & Safety", desc: "Workplace safety programs and workers' comp management." },
];

const ASOSection = () => {
  return (
    <section id="aso" className="py-24 lg:py-32 bg-muted relative">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-secondary mb-3">Sister Company</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Administrative Services
          </h2>
          <div className="w-16 h-[2px] gradient-gold mx-auto mt-5 rounded-full" />
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Beyond insurance, our ASO division helps businesses focus on growth by handling the complexities of HR, payroll, and compliance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {asoServices.map((svc) => (
            <div key={svc.title} className="bg-card rounded-lg p-7 text-center border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 mx-auto rounded-lg bg-primary flex items-center justify-center mb-4">
                <svc.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-heading font-semibold text-foreground mb-2">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ASOSection;
