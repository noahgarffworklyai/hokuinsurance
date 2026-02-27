import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      toast({ title: "Message sent!", description: "We'll be in touch soon." });
      setForm({ name: "", email: "", phone: "", message: "" });
      setSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="bg-primary pt-36 pb-16 lg:pt-44 lg:pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(195_55%_22%)] to-[hsl(195_55%_32%)] opacity-50" />
          <div className="container relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase text-accent mb-3">Get In Touch</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
              Contact Us
            </h1>
            <div className="w-16 h-[2px] gradient-gold mt-6 rounded-full" />
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Name *</label>
                    <input
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                    <input
                      required
                      type="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                    <input
                      type="tel"
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="(808) 555-1234"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="gradient-gold text-white px-7 py-3 text-[13px] font-semibold tracking-[0.15em] uppercase rounded hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 disabled:opacity-60"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Contact Information</h2>
                <div className="bg-card rounded-lg p-8 border border-border space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Address</p>
                      <a href="https://www.google.com/maps/place/75-170+Hualalai+Rd+Ste+A100,+Kailua-Kona,+HI+96740" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">75-170 Hualalai Rd Ste A100<br />Kailua-Kona, HI 96740</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Phone</p>
                      <a href="tel:+18084944451" className="text-muted-foreground text-sm hover:text-primary transition-colors">(808) 494-4451</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Email</p>
                      <a href="mailto:info@hokuinsurance.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">info@hokuins.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Office Hours</p>
                      <p className="text-muted-foreground text-sm">Monday – Friday, 8:00 AM – 5:00 PM HST</p>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="rounded-lg overflow-hidden border border-border mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.7638152817567!2d-155.9889213!3d19.6373927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x79540efc932a6fd9%3A0x345c2d61430342!2s75-170%20Hualalai%20Rd%20ste%20a100%2C%20Kailua-Kona%2C%20HI%2096740!5e0!3m2!1sen!2sus!4v1772172884504!5m2!1sen!2sus"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hoku Insurance Office Location"
                  />
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

export default Contact;
