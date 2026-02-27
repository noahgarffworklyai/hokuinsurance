import ServicePageLayout from "@/components/ServicePageLayout";
import { CreditCard, Phone } from "lucide-react";

const PayYourBill = () => {
  return (
    <ServicePageLayout title="Pay Your Bill" subtitle="Account Management">
      <div className="text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
          <CreditCard className="h-7 w-7 text-white" />
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
          Quick, secure, and convenient. Use our online portal to manage your account and stay current with your coverage. If you have questions about your statement or need assistance with a payment, our local team is just a phone call away and ready to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            disabled
            className="inline-flex items-center justify-center gap-2 gradient-gold text-white px-7 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase rounded opacity-70 cursor-not-allowed"
          >
            Payment Portal — Coming Soon
          </button>
          <a
            href="tel:+18085551234"
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase rounded hover:bg-muted transition-colors"
          >
            <Phone className="h-4 w-4" />
            Call Us
          </a>
        </div>
      </div>
    </ServicePageLayout>
  );
};

export default PayYourBill;
