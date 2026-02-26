import { Building2, Home, Shield, Users, Umbrella, FileText } from "lucide-react";

const services = [
{
  icon: Building2,
  title: "Commercial Insurance",
  description: "Comprehensive coverage for businesses of all sizes — from general liability and property to workers' compensation and commercial auto."
},
{
  icon: Home,
  title: "Personal Lines",
  description: "Protect your home, auto, and personal assets with tailored policies designed for Hawai'i residents."
},
{
  icon: Shield,
  title: "Property & Casualty",
  description: "Specialized P&C solutions that account for the unique risks of island living, from natural disasters to liability."
},
{
  icon: Users,
  title: "ASO Services",
  description: "Our sister company provides Administrative Services Organization solutions — payroll, HR, compliance, and employee management."
},
{
  icon: Umbrella,
  title: "Risk Management",
  description: "Proactive risk assessment and loss prevention strategies to protect your business before claims occur."
},
{
  icon: FileText,
  title: "Claims Support",
  description: "Dedicated local claims advocacy to guide you through the process and ensure fair, timely resolution."
}];


const Services = () => {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-background relative">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-secondary mb-3">Insurance Services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground">
            Solutions That Work
          </h2>
          <div className="w-16 h-[2px] gradient-gold mx-auto mt-5 rounded-full" />
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">From commercial coverage to personal protection, the Hoku team delivers expert solutions with the care and commitment Hawaii deserves.

          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) =>
          <div
            key={service.title}
            className="group bg-card rounded-lg p-7 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300">

              <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="h-5 w-5 text-white group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default Services;