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
    <section id="solutions" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3">Insurance Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Solutions That Work
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
            From commercial coverage to personal protection, the Hoku team delivers expert solutions with the care and commitment Hawai'i deserves.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card rounded-lg p-8 shadow-sm border border-border hover:shadow-lg hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-navy flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors">
                <service.icon className="h-6 w-6 text-gold-light" />
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
