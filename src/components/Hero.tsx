import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-slate-blue/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container relative z-10 pt-40 pb-28">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-8">
            <span className="text-gold-light">Protecting What</span>
            <br />
            <span className="text-gradient-gold">Matters Most</span>
            <br />
            <span className="text-gold-light/70">in Hawai'i</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-blue-light font-body leading-relaxed mb-10 max-w-xl">
            Full-service commercial and personal lines Property &amp; Casualty insurance, 
            backed by local expertise and genuine aloha.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="gradient-gold text-accent-foreground px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-full hover:shadow-xl hover:shadow-gold/25 transition-all duration-300 hover:scale-105"
            >
              Talk to an Expert
            </a>
            <a
              href="#solutions"
              className="glass text-gold-light px-8 py-4 text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Our Solutions
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
