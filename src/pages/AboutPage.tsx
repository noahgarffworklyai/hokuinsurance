import { CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import hawaiiBeach from "@/assets/hawaii-beach.jpg";

const highlights = [
  "Full-service commercial & personal P&C agency",
  "Deep knowledge of Hawaii-specific risks",
  "Sister company offering ASO services",
  "Dedicated claims advocacy & support",
  "Locally owned and operated in Kailua-Kona",
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="bg-primary pt-36 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
          <img src={hawaiiBeach} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(195_55%_22%)] to-[hsl(195_55%_32%)] opacity-50" />
          <div className="container relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-accent mb-3">About Hoku</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight max-w-3xl">
              Guided by the Stars,{" "}
              <span className="text-gradient-gold">Rooted in Aloha</span>
            </h1>
            <div className="w-16 h-[2px] gradient-gold mt-6 rounded-full" />
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Hoku — meaning "star" in Hawaiian — reflects our commitment to being a guiding light for our clients.
                As a locally owned insurance agency in Kailua-Kona, we understand the unique needs of Hawaii's
                businesses and families.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Through our sister company, we also provide comprehensive Administrative Services Organization (ASO)
                solutions, helping businesses streamline payroll, HR, and compliance — all under one roof.
              </p>

              <ul className="space-y-3 mb-16">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Founders */}
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-10">
                Meet Our Founders
              </h2>

              <div className="space-y-10">
                {/* Elizabeth */}
                <div className="bg-card rounded-lg p-8 border border-border">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    Elizabeth Dinmore
                  </h3>
                  <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                    Principal & Co-Founder
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Elizabeth is a co-owner and General Manager of Hoku Insurance, where she focuses on delivering personalized, high-touch service to clients across the islands. With a background rooted in strategic management and a passion for community-based business, Elizabeth recognized a vital need for a more consultative insurance experience in Hawaii. Her leadership is defined by a commitment to transparency and building long-term partnerships. Alongside Jeff, Liz ensures that Hoku Insurance acts as a true "Hokulea Star" for its clients, providing specialized solutions that protect both the personal assets and the professional legacies of the local community.
                  </p>
                </div>

                {/* Jeff */}
                <div className="bg-card rounded-lg p-8 border border-border">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    Jeff Garff
                  </h3>
                  <p className="text-[13px] font-semibold tracking-[0.15em] uppercase text-accent mb-4">
                    Principal & Co-Founder
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Jeff brings over 15 years of dedicated insurance expertise to Hoku Insurance. A commercial specialist since 2011, Jeff previously owned and operated his own agency before partnering with Elizabeth Dinmore to launch Hoku. As a University of Utah alumnus, professional baseball player and a high school baseball coach, Jeff carries his passion for teamwork and leadership from the field into the office. Having been born in Idaho, lived on Oahu and the mainland before returning home to Kona, he possesses a deep understanding of the local landscape. Jeff is committed to providing a hands-on, consultative approach that helps Hawaii's business owners navigate their risks with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
