import { Briefcase, DollarSign, ClipboardCheck, ShieldCheck } from "lucide-react";

const asoServices = [
  { icon: DollarSign, title: "Payroll Administration", desc: "Accurate, timely payroll processing with tax compliance." },
  { icon: Briefcase, title: "HR Management", desc: "Employee onboarding, benefits administration, and policy development." },
  { icon: ClipboardCheck, title: "Compliance", desc: "Stay current with federal, state, and local employment regulations." },
  { icon: ShieldCheck, title: "Risk & Safety", desc: "Workplace safety programs and workers' comp management." },
];

const ASOSection = () => {
  return (
    <section id="aso" className="py-24 lg:py-32 bg-muted relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Sister Company</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground">
            Administrative Services Organization
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Beyond insurance, our ASO division helps businesses focus on growth by handling the complexities of HR, payroll, and compliance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {asoServices.map((svc) => (
            <div key={svc.title} className="bg-card rounded-2xl p-8 text-center shadow-sm border border-border hover:shadow-2xl hover:shadow-navy/5 hover:border-gold/20 transition-all duration-500 hover:-translate-y-1">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-navy flex items-center justify-center mb-5">
                <svc.icon className="h-7 w-7 text-gold" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ASOSection;
