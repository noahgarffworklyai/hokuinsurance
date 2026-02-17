import { CheckCircle } from "lucide-react";

const highlights = [
  "Full-service commercial & personal P&C agency",
  "Deep knowledge of Hawai'i-specific risks",
  "Sister company offering ASO services",
  "Dedicated claims advocacy & support",
  "Locally owned and operated in Kailua-Kona",
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-navy text-gold-light relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-slate-blue/10 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-secondary mb-4">About Hoku</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-8">
              Guided by the Stars,{" "}
              <span className="text-gradient-gold">Rooted in Aloha</span>
            </h2>
            <p className="text-gold-light/70 text-lg leading-relaxed mb-6">
              Hoku — meaning "star" in Hawaiian — reflects our commitment to being a guiding light for our clients. 
              As a locally owned insurance agency in Kailua-Kona, we understand the unique needs of Hawai'i's 
              businesses and families.
            </p>
            <p className="text-gold-light/70 text-lg leading-relaxed mb-10">
              Through our sister company, we also provide comprehensive Administrative Services Organization (ASO) 
              solutions, helping businesses streamline payroll, HR, and compliance — all under one roof.
            </p>

            <ul className="space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-gold-light/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="glass rounded-3xl p-10 lg:p-14">
              <blockquote className="text-2xl sm:text-3xl font-heading italic text-gold-light/90 leading-relaxed">
                "We don't just sell policies — we build lasting relationships that protect what matters most."
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gold/20" />
                <span className="text-sm tracking-[0.2em] uppercase text-gold/50 font-medium">Hoku Insurance</span>
                <div className="h-px flex-1 bg-gold/20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
