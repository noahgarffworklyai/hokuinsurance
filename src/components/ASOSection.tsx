import { Briefcase, DollarSign, ClipboardCheck, ShieldCheck } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const asoServices = [
  { icon: DollarSign, title: "Payroll Administration", desc: "Accurate, timely payroll processing with tax compliance." },
  { icon: Briefcase, title: "HR Management", desc: "Employee onboarding, benefits administration, and policy development." },
  { icon: ClipboardCheck, title: "Compliance", desc: "Stay current with federal, state, and local employment regulations." },
  { icon: ShieldCheck, title: "Risk & Safety", desc: "Workplace safety programs and workers' comp management." },
];

const ASOSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="aso" className="py-32 lg:py-40 bg-muted relative">
      <div className="container" ref={ref}>
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-secondary mb-5">Sister Company</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-heading font-semibold text-foreground tracking-[-0.02em] leading-[1.1]">
            Administrative Services
          </h2>
          <p className="mt-6 text-muted-foreground max-w-lg mx-auto leading-[1.8] text-[15px]">
            Beyond insurance, our ASO division helps businesses focus on growth by handling the complexities of HR, payroll, and compliance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {asoServices.map((svc, i) => (
            <div
              key={svc.title}
              className={`bg-card rounded-xl p-8 text-center border border-border/60 hover:border-accent/40 hover:shadow-xl hover:shadow-primary/[0.04] transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100 + 200}ms` : "0ms" }}
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <svc.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-heading font-semibold text-foreground mb-2 tracking-[-0.01em]">{svc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ASOSection;
