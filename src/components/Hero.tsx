import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover object-bottom" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(195_55%_14%/0.92)] via-[hsl(195_55%_18%/0.82)] to-[hsl(195_55%_22%/0.65)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-36 pb-24">
        <div className="max-w-2xl animate-fade-in-up">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gold mb-6">
            Hawai'i's Trusted Insurance Partner
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-bold leading-[1.15] mb-8 text-white">
            Protecting What Matters Most in Hawai'i.
          </h1>
          <p className="text-lg text-white/70 font-body leading-relaxed mb-10 max-w-lg">
            Full-service commercial and personal lines Property &amp; Casualty insurance, 
            backed by local expertise and genuine aloha.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 gradient-gold text-white px-7 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase rounded hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 border border-white/25 text-white/90 px-7 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase rounded hover:bg-white/10 transition-all duration-300"
            >
              Our Solutions
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
