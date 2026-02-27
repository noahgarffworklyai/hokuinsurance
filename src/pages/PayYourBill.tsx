import ServicePageLayout from "@/components/ServicePageLayout";
import { Phone, Clock, ShieldCheck } from "lucide-react";

const PayYourBill = () => {
  return (
    <ServicePageLayout title="Pay Your Bill" subtitle="Account Management">
      <div className="max-w-2xl mx-auto space-y-10">
        {/* Main Card */}
        <div className="bg-card border border-border rounded-lg p-8 sm:p-10 text-center">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground mb-3">
            Speak With Our Team Directly
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto">
            We handle payments personally to ensure accuracy and answer any questions about your policy or statement. Give us a call and we'll take care of the rest.
          </p>
          <a
            href="tel:+18084944451"
            className="inline-flex items-center justify-center gap-2.5 gradient-gold text-white px-8 py-4 text-[13px] font-semibold tracking-[0.15em] uppercase rounded hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
          >
            <Phone className="h-4 w-4" />
            (808) 494-4451
          </a>
        </div>

        {/* Supporting details */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-4 bg-muted/50 rounded-lg p-5">
            <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Office Hours</p>
              <p className="text-sm text-muted-foreground">Mon – Fri, 8:00 AM – 5:00 PM HST</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-muted/50 rounded-lg p-5">
            <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">Secure & Personal</p>
              <p className="text-sm text-muted-foreground">Every payment is handled by our local Kona team.</p>
            </div>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default PayYourBill;
