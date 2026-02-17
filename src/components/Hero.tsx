import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gold-light leading-tight mb-6">
            Protecting What Matters Most in Hawai'i
          </h1>
          <p className="text-lg sm:text-xl text-gold-light/80 font-body leading-relaxed mb-8 max-w-xl">
            Full-service commercial and personal lines Property &amp; Casualty insurance, 
            backed by local expertise and genuine aloha.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-accent text-accent-foreground px-8 py-3.5 text-sm font-semibold tracking-wider uppercase rounded hover:brightness-110 transition-all"
            >
              Talk to an Expert
            </a>
            <a
              href="#solutions"
              className="border-2 border-gold-light/40 text-gold-light px-8 py-3.5 text-sm font-semibold tracking-wider uppercase rounded hover:border-gold hover:text-gold transition-all"
            >
              Our Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
