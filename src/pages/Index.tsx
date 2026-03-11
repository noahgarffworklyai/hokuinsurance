import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ASOSection from "@/components/ASOSection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <SEO
        title="Hoku Insurance | Hawaii's Trusted Property & Casualty Insurance Agency"
        description="Hoku Insurance LLC is a full-service commercial and personal lines Property & Casualty insurance agency in Kailua-Kona, Hawaii. Get expert coverage with genuine Aloha."
        canonical="/"
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <ASOSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
