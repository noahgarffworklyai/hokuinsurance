import { Building2, Home, Shield, Users, Umbrella, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    icon: Building2,
    title: "Commercial Insurance",
    description: "Comprehensive coverage for businesses of all sizes — from general liability and property to workers' compensation.",
    href: "/commercial-insurance",
  },
  {
    icon: Home,
    title: "Personal Lines",
    description: "Protect your home, auto, and personal assets with tailored policies designed for Hawaii residents.",
    href: "/personal-lines",
  },
  {
    icon: Shield,
    title: "Property & Casualty",
    description: "Specialized P&C solutions that account for the unique risks of island living.",
    href: "/property-casualty",
  },
  {
    icon: Users,
    title: "ASO Services",
    description: "Administrative Services Organization solutions — payroll, HR, compliance, and employee management.",
    href: "/aso-services",
  },
  {
    icon: Umbrella,
    title: "Risk Management",
    description: "Proactive risk assessment and loss prevention strategies to protect your business.",
    href: "/risk-management",
  },
  {
    icon: FileText,
    title: "Claims Support",
    description: "Dedicated local claims advocacy to guide you through the process with fair, timely resolution.",
    href: "/claims-support",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="solutions" className="py-32 lg:py-40 bg-background relative">
      <div className="container" ref={ref}>
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-secondary mb-4">Insurance Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-heading font-semibold text-foreground tracking-[-0.01em] leading-tight">
            Solutions That Work
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Expert coverage with the care and commitment Hawaii deserves.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Link
              key={service.title}
              to={service.href}
              className={`group relative bg-card rounded-xl p-8 border border-border/60 hover:border-accent/40 hover:shadow-xl hover:shadow-primary/[0.04] transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80 + 200}ms` : "0ms" }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-500">
                <service.icon className="h-5 w-5 text-primary group-hover:text-accent-foreground transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2 tracking-[-0.01em]">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.1em] uppercase text-primary/60 group-hover:text-primary transition-colors duration-300">
                Learn more
                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
