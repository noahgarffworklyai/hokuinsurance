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
    <section id="about" className="py-20 lg:py-28 bg-navy text-gold-light">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-secondary mb-3">About Hoku</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6">
              Guided by the Stars, Rooted in Aloha
            </h2>
            <p className="text-gold-light/80 text-lg leading-relaxed mb-6">
              Hoku — meaning "star" in Hawaiian — reflects our commitment to being a guiding light for our clients. 
              As a locally owned insurance agency in Kailua-Kona, we understand the unique needs of Hawai'i's 
              businesses and families.
            </p>
            <p className="text-gold-light/80 text-lg leading-relaxed mb-8">
              Through our sister company, we also provide comprehensive Administrative Services Organization (ASO) 
              solutions, helping businesses streamline payroll, HR, and compliance — all under one roof.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-gold-light/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="bg-navy-light rounded-xl p-10 lg:p-14 border border-gold/20">
              <blockquote className="text-2xl sm:text-3xl font-heading italic text-gold-light/90 leading-relaxed">
                "We don't just sell policies — we build lasting relationships that protect what matters most."
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gold/20" />
                <span className="text-sm tracking-widest uppercase text-gold/60">Hoku Insurance</span>
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
