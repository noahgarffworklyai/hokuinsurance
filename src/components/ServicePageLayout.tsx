import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  children: React.ReactNode;
}

const ServicePageLayout = ({ title, subtitle, heroImage, children }: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="bg-primary pt-36 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
          {heroImage && (
            <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" decoding="async" />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(195_55%_22%)] to-[hsl(195_55%_32%)] opacity-50" />
          <div className="container relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-accent mb-3">
              {subtitle}
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight max-w-3xl">
              {title}
            </h1>
            <div className="w-16 h-[2px] gradient-gold mt-6 rounded-full" />
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto prose-container">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;
