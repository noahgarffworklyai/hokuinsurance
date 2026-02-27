import ServicePageLayout from "@/components/ServicePageLayout";
import { DollarSign, Briefcase, ClipboardCheck, Users, ShieldCheck, MapPin, TrendingUp, Link2 } from "lucide-react";
import teamMeeting from "@/assets/team-meeting.jpg";

const services = [
  { icon: DollarSign, title: "Precise Payroll Processing", desc: "We handle the end-to-end payroll cycle, including direct deposits, tax withholdings, and the filing of state and federal payroll taxes. We ensure your team is paid accurately and on time, every time." },
  { icon: Briefcase, title: "Human Resources Support", desc: "From drafting employee handbooks that reflect Hawaii's unique workplace culture to managing performance reviews and disciplinary procedures, we provide the infrastructure for a professional HR department." },
  { icon: ClipboardCheck, title: "Rigorous Compliance Management", desc: "Staying compliant with Hawaii's TDI (Temporary Disability Insurance), Prepaid Healthcare Act, and workers' compensation requirements is a full-time job. Hoku Resources monitors legislative changes so you don't have to." },
  { icon: Users, title: "Employee Lifecycle Management", desc: "We streamline everything from onboarding new hires to managing terminations and COBRA administration, ensuring a seamless experience for your staff." },
];

const advantages = [
  { icon: ShieldCheck, title: "Retain Total Control", desc: "Unlike a PEO (Professional Employer Organization), which uses a co-employment model, an ASO leaves you as the sole employer of record. You keep your own federal tax ID and complete autonomy over your hiring decisions, while we act as your expert administrative arm." },
  { icon: MapPin, title: "Local Expertise for Local Laws", desc: "Hawaii has some of the most unique and stringent labor laws in the nation. Hoku Resources is staffed by professionals who live and work here. We understand the nuances of the Hawaii Prepaid Healthcare Act and local labor nuances that mainland providers often overlook." },
  { icon: TrendingUp, title: "Cost-Effective Scalability", desc: "Hiring a full-time HR Director, a Payroll Specialist, and a Compliance Officer is financially out of reach for many small to mid-sized firms. Hoku Resources gives you access to a full team of specialists for a fraction of the cost of one executive salary." },
  { icon: Link2, title: "Integrated Synergy with Hoku Insurance", desc: "Because Hoku Resources is our sister company, there is a seamless \"Hokulea Star\" alignment between your insurance needs and your workforce management. We can coordinate workers' comp claims data and benefits administration with precision, reducing data silos and administrative friction." },
];

const ASOServicesPage = () => {
  return (
    <ServicePageLayout title="Administrative Services Organization (ASO): Streamlining Your Success" subtitle="Sister Company" heroImage={teamMeeting}>
      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
        Running a business in Hawaii is rewarding, but the administrative burden can often feel like trekking up Mauna Kea in a gale. Between complex labor laws, payroll taxes, and the ever-changing landscape of HR compliance, many business owners find themselves spending more time on paperwork than on their actual craft. This is where our sister company, Hoku Resources, steps in to light the way. Our sister company provides Administrative Services Organization (ASO) solutions—payroll, HR, compliance, and employee management.
      </p>
      <p className="text-muted-foreground leading-relaxed mb-12">
        While Hoku Insurance protects your assets, Hoku Resources protects your time and your culture. By partnering with an ASO, you maintain full control over your workforce while offloading the high-stress, technical back-office functions to a team of local experts.
      </p>

      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
        Comprehensive Workforce Solutions
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Hoku Resources offers a suite of services designed to scale with your business, whether you're a growing startup in Honolulu or an established family business in Kona.
      </p>
      <div className="grid sm:grid-cols-2 gap-5 mb-16">
        {services.map((s) => (
          <div key={s.title} className="bg-card rounded-lg p-6 border border-border">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-4">
              <s.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-base font-heading font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-8">
        The Hoku Resources Advantage: Why an ASO?
      </h2>
      <div className="space-y-6 mb-16">
        {advantages.map((a, i) => (
          <div key={a.title} className="flex gap-5">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-1">
              <a.icon className="h-5 w-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-base font-heading font-semibold text-foreground mb-1">{i + 1}. {a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary rounded-lg p-8 lg:p-10 text-center">
        <h2 className="text-2xl font-heading font-bold text-white mb-4">Focus on Your Mission, Not Your Mailbox</h2>
        <p className="text-white/70 leading-relaxed mb-6 max-w-2xl mx-auto">
          Don't let the weight of administration dim your business's potential. By choosing Hoku Resources for your ASO needs, you're investing in the peace of mind that comes from knowing your back office is as solid as the island lava rock.
        </p>
        <a href="/contact" className="inline-flex items-center gap-2 gradient-gold text-white px-7 py-3.5 text-[13px] font-semibold tracking-[0.15em] uppercase rounded hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
          Contact Us
        </a>
      </div>
    </ServicePageLayout>
  );
};

export default ASOServicesPage;
