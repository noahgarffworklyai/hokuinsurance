import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Scenic Hawaii coastline representing Hoku Insurance's commitment to protecting island properties"
          className="w-full h-full object-cover object-bottom"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(195_55%_10%/0.94)] via-[hsl(195_55%_14%/0.85)] to-[hsl(195_55%_20%/0.6)]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-40 pb-32">
        <div className="max-w-2xl">
          <p
            className="text-[11px] font-semibold tracking-[0.35em] uppercase text-accent mb-8 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Hawaii's Trusted Insurance Partner
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-medium tracking-[-0.025em] leading-[1.06] mb-8 text-white opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Protecting What
            <br />
            Matters Most
            <br />
            <span className="text-gradient-gold">in Hawaiʻi.</span>
          </h1>
          <p
            className="text-lg text-white/55 font-body leading-[1.85] mb-14 max-w-lg opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            Full-service commercial and personal lines Property &amp; Casualty insurance, backed by local expertise and
            genuine Aloha.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 gradient-gold text-white px-8 py-4 text-[12px] font-semibold tracking-[0.2em] uppercase rounded-md hover:shadow-xl hover:shadow-accent/25 transition-all duration-500 hover:-translate-y-0.5 active:translate-y-0"
            >
              Talk to an Expert
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-8 py-4 text-[12px] font-semibold tracking-[0.2em] uppercase rounded-md hover:bg-white/10 hover:border-white/30 transition-all duration-500"
            >
              Our Solutions
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
