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
    <section id="about" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-secondary-foreground/60 mb-3">About Hoku</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6 text-white">
              Guided by the Stars,{" "}
              <span className="text-gradient-gold">Rooted in Aloha</span>
            </h2>
            <p className="text-white/65 leading-relaxed mb-4">
              Hoku — meaning "star" in Hawaiian — reflects our commitment to being a guiding light for our clients. 
              As a locally owned insurance agency in Kailua-Kona, we understand the unique needs of Hawai'i's 
              businesses and families.
            </p>
            <p className="text-white/65 leading-relaxed mb-8">
              Through our sister company, we also provide comprehensive Administrative Services Organization (ASO) 
              solutions, helping businesses streamline payroll, HR, and compliance — all under one roof.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-lg p-10 lg:p-12">
              <blockquote className="text-xl sm:text-2xl font-heading italic text-white/90 leading-relaxed">
                "We don't just sell policies — we build lasting relationships that protect what matters most."
              </blockquote>
              <div className="mt-6 pt-6 border-t border-white/10">
                <span className="text-[12px] tracking-[0.2em] uppercase text-accent font-semibold">Hoku Insurance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
