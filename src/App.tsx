import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CommercialInsurance from "./pages/CommercialInsurance";
import PersonalLines from "./pages/PersonalLines";
import PropertyCasualty from "./pages/PropertyCasualty";
import ASOServices from "./pages/ASOServices";
import RiskManagement from "./pages/RiskManagement";
import ClaimsSupport from "./pages/ClaimsSupport";
import PayYourBill from "./pages/PayYourBill";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/commercial-insurance" element={<CommercialInsurance />} />
          <Route path="/personal-lines" element={<PersonalLines />} />
          <Route path="/property-casualty" element={<PropertyCasualty />} />
          <Route path="/aso-services" element={<ASOServices />} />
          <Route path="/risk-management" element={<RiskManagement />} />
          <Route path="/claims-support" element={<ClaimsSupport />} />
          <Route path="/pay-your-bill" element={<PayYourBill />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
