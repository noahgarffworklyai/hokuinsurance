import { CheckCircle } from "lucide-react";
import hawaiiLavaStars from "@/assets/hawaii-lava-stars.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const highlights = [
  "Full-service commercial & personal P&C agency",
  "Deep knowledge of Hawaii-specific risks",
  "Sister company offering ASO services",
  "Dedicated claims advocacy & support",
  "Locally owned and operated in Kailua-Kona",
];

const About = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="about" className="py-32 lg:py-40 bg-primary relative overflow-hidden">
      <div className="container relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-[11px] font-semibold tracking-[0.35em] uppercase text-white/40 mb-4">About Hoku</p>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-heading font-semibold leading-tight mb-8 text-white tracking-[-0.01em]">
              Guided by Respect,{" "}
              <span className="text-gradient-gold">Rooted in Aloha</span>
            </h2>
            <p className="text-white/55 leading-[1.8] mb-4 text-[15px]">
              Hoku — meaning "star" in Hawaiian — reflects our commitment to being a guiding light for our clients. 
              As a locally owned insurance agency in Kailua-Kona, we understand the unique needs of Hawaii's 
              businesses and families.
            </p>
            <p className="text-white/55 leading-[1.8] mb-10 text-[15px]">
              Through our sister company, we also provide comprehensive Administrative Services Organization (ASO) 
              solutions, helping businesses streamline payroll, HR, and compliance — all under one roof.
            </p>

            <ul className="space-y-3.5">
              {highlights.map((item, i) => (
                <li
                  key={item}
                  className={`flex items-center gap-3 transition-all duration-700 ease-out ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: isVisible ? `${i * 100 + 400}ms` : "0ms" }}
                >
                  <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                  <span className="text-white/75 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img 
                src={hawaiiLavaStars} 
                alt="Hawaii lava flow under starry night sky" 
                className="w-full h-[420px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-xl px-7 py-5 mt-5">
              <blockquote className="text-[15px] font-heading italic text-white/85 leading-relaxed">
                "We don't just sell policies — we build lasting relationships."
              </blockquote>
              <span className="text-[10px] tracking-[0.25em] uppercase text-accent/80 font-semibold mt-3 block">Hoku Insurance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
