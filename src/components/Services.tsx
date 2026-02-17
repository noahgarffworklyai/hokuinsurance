import { Building2, Home, Shield, Users, Umbrella, FileText } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Insurance",
    description: "Comprehensive coverage for businesses of all sizes — from general liability and property to workers' compensation and commercial auto.",
  },
  {
    icon: Home,
    title: "Personal Lines",
    description: "Protect your home, auto, and personal assets with tailored policies designed for Hawai'i residents.",
  },
  {
    icon: Shield,
    title: "Property & Casualty",
    description: "Specialized P&C solutions that account for the unique risks of island living, from natural disasters to liability.",
  },
  {
    icon: Users,
    title: "ASO Services",
    description: "Our sister company provides Administrative Services Organization solutions — payroll, HR, compliance, and employee management.",
  },
  {
    icon: Umbrella,
    title: "Risk Management",
    description: "Proactive risk assessment and loss prevention strategies to protect your business before claims occur.",
  },
  {
    icon: FileText,
    title: "Claims Support",
    description: "Dedicated local claims advocacy to guide you through the process and ensure fair, timely resolution.",
  },
];

const Services = () => {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container relative">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-4">Insurance Services</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground">
            Solutions That Work
          </h2>
          <div className="w-20 h-1 gradient-gold mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            From commercial coverage to personal protection, the Hoku team delivers expert solutions with the care and commitment Hawai'i deserves.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-2xl hover:shadow-navy/5 hover:border-gold/20 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
