import Link from "next/link";
import Image from "next/image";
import { 
  Palette, 
  Code2, 
  Search, 
  Smartphone, 
  Target, 
  Wrench, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { packagesData } from "@/lib/packages";
import ProposalDialog from "@/components/ProposalDialog";

const services = [
  {
    id: "website-design",
    title: "Website Design",
    subtitle: "Look Professional & Stand Out",
    desc: "We design custom websites tailored to your brand from scratch. Every page is crafted to look impressive, engage your visitors, and guide them directly toward contacting you.",
    icon: Palette,
    deliverables: ["Custom Figma design mockups", "Easy-to-use mobile layouts", "Clear buttons that prompt action", "Matching brand colors and graphics"]
  },
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "Fast, Reliable & Secure",
    desc: "No slow plugins or heavy templates. We hand-code high-performance websites using modern technology, giving your visitors an instant, smooth experience.",
    icon: Code2,
    deliverables: ["Loads in under a second", "Clean code that never breaks", "Works on Chrome, Safari & all browsers", "Easy and accessible for every visitor"]
  },
  {
    id: "seo-services",
    title: "SEO Services",
    subtitle: "Get Found On Google",
    desc: "A beautiful website is useless if no one finds it. We structure and optimize your site so you rank high on Google for the services your customers search for every day.",
    icon: Search,
    deliverables: ["High-intent search keyword research", "Complete Google indexing & setup", "Google Maps and local search setup", "Rich review and service search snippets"]
  },
  {
    id: "mobile-optimization",
    title: "Mobile Optimization",
    subtitle: "Built for Phone Screens",
    desc: "Over 70% of your visitors browse on their smartphone. We make sure every button, form, and page feels completely natural and effortless to use with one thumb.",
    icon: Smartphone,
    deliverables: ["Fast loading on mobile data & 5G", "Thumb-friendly buttons and forms", "Crisp images that never slow down", "Tested across iPhone & Android"]
  },
  {
    id: "conversion-optimization",
    title: "Conversion Optimization",
    subtitle: "Turn Clicks Into Calls",
    desc: "We analyze visitor behavior to remove confusion. By refining calls-to-action, contact forms, and page structure, we help you get more customer inquiries from the same traffic.",
    icon: Target,
    deliverables: ["Layouts designed to prompt action", "Simple, low-friction inquiry forms", "Clear messaging your buyers understand", "Live tracking of calls and form leads"]
  },
  {
    id: "speed-maintenance",
    title: "Speed & Maintenance",
    subtitle: "Care & Ongoing Support",
    desc: "Keep your website secure, healthy, and fast month after month. We take care of software updates, speed checks, and quick content changes whenever you need them.",
    icon: Wrench,
    deliverables: ["Ongoing speed & uptime monitoring", "Security updates and automated backups", "Quick text & image changes on request", "Direct access to our agency team"]
  }
];

export default function ServicesPage() {
  return (
    <div className="py-12 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 sm:mb-20 text-center">
          <div>
            <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-3 block">
              Core Capabilities
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-display text-[#17171c] uppercase tracking-[-1.44px] mb-6">
              Services Designed to <span className="text-[#003c33]">Grow Your Business</span>
            </h1>
            <p className="text-[#616161] max-w-2xl mx-auto text-base sm:text-lg font-sans">
              We focus on the three things that matter most for your online success: <strong>Design that impresses</strong>, <strong>Code that loads fast</strong>, and <strong>SEO that brings customers</strong>.
            </p>
          </div>
        </header>

        {/* 6 Capability Cards */}
        <section aria-labelledby="services-list-heading" className="mb-20 sm:mb-28">
          <h2 id="services-list-heading" className="sr-only">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                id={service.id}
                className="p-8 sm:p-10 group relative flex flex-col justify-between rounded-[16px] bg-white border border-[#d9d9dd] hover:border-[#17171c] transition-all scroll-mt-28"
              >
                <div>
                  <div className="size-12 rounded-[8px] bg-[#eeece7] border border-[#e5e7eb] flex items-center justify-center text-[#17171c] mb-6">
                    <service.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-[#ff7759] text-xs font-mono font-medium uppercase tracking-wider block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-[#17171c] uppercase tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#616161] text-sm leading-relaxed font-sans mb-6">
                    {service.desc}
                  </p>
                  
                  <div className="pt-4 border-t border-[#e5e7eb] mb-8">
                    <div className="text-[11px] uppercase font-mono font-bold text-[#75758a] mb-2.5">Key Deliverables:</div>
                    <ul className="space-y-2">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-[#212121] font-sans">
                          <CheckCircle2 size={13} className="text-[#003c33] flex-shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <ProposalDialog defaultPackage={service.title}>
                  <button 
                    type="button"
                    aria-label={`Discuss Your Project - Inquire about ${service.title}`}
                    className="btn-pill-outline w-full justify-between min-h-[44px] py-2.5 px-5 text-xs uppercase tracking-wider font-medium cursor-pointer group"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </button>
                </ProposalDialog>
              </div>
            ))}
          </div>
        </section>
        
        {/* Cohere Deep Green Band: How We Deliver */}
        <section className="mb-20 sm:mb-28 p-8 sm:p-14 rounded-[22px] bg-[#003c33] text-white cv-auto" aria-labelledby="process-heading">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#edfce9] font-mono text-xs uppercase tracking-widest mb-2 block">
                How We Deliver
              </span>
              <h2 id="process-heading" className="text-3xl sm:text-4xl font-normal font-display text-white uppercase tracking-[-0.48px] mb-4">
                Our Simple, Transparent Process
              </h2>
              <p className="text-[#d9d9dd] mb-8 font-sans text-sm sm:text-base">
                No jargon or confusing agency buzzwords. Just clear steps and predictable milestones from day one.
              </p>
              
              <div className="space-y-6">
                {[
                  { step: "01", title: "Strategy & Discovery", desc: "We understand your business goals, target clients, and key competitors to plan the website structure." },
                  { step: "02", title: "Custom Visual Design", desc: "We design every page from scratch. You review the mockups, suggest any tweaks, and approve the exact look." },
                  { step: "03", title: "Hand-Coded Fast Build", desc: "We build your site with modern code engineered to load in under a second, look sharp, and work on every phone." },
                  { step: "04", title: "Google Setup & Launch", desc: "We test every button, connect your domain, submit your pages to Google for indexing, and take your site live." }
                ].map(item => (
                  <div key={item.step} className="flex gap-4 items-start">
                    <span className="font-mono text-xs font-bold size-8 rounded-full bg-[#004d42] text-[#edfce9] flex items-center justify-center shrink-0" aria-hidden="true">{item.step}</span>
                    <div>
                      <h3 className="text-white font-bold font-display uppercase text-sm mb-1">{item.title}</h3>
                      <p className="text-[#d9d9dd] text-xs sm:text-sm font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square bg-[#002b24] rounded-[16px] overflow-hidden border border-[#004d42]">
              <Image 
                src="/projects/process.png" 
                alt="Illustration showing the collaborative 4-step digital design and development process" 
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-90" 
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Tailored Investment Packages */}
        <section className="mb-20 sm:mb-28 cv-auto" aria-labelledby="packages-heading">
          <div className="text-center mb-16">
            <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-2 block">
              Transparent Pricing • Fixed Scopes
            </span>
            <h2 id="packages-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] uppercase tracking-[-0.48px]">
              Tailored Investment Packages
            </h2>
            <p className="text-[#616161] font-sans text-sm sm:text-base max-w-xl mx-auto mt-2">
              Fixed-price scopes in US Dollars ($) with guaranteed 98+ PageSpeed and 100% intellectual property ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {packagesData.map((pkg) => (
              <div
                key={pkg.id}
                className={`p-8 sm:p-10 relative flex flex-col justify-between rounded-[16px] transition-all ${
                  pkg.recommended 
                    ? "border-2 border-[#17171c] bg-[#eeece7]" 
                    : "border border-[#e5e7eb] bg-[#fafaf9] hover:border-[#d9d9dd]"
                }`}
              >
                <div>
                  {pkg.badge && (
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#17171c] text-white text-[10px] uppercase font-mono font-medium tracking-wider mb-3">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold font-display text-[#17171c] uppercase mb-2 tracking-tight">{pkg.name}</h3>
                  <div className="text-3xl sm:text-4xl font-bold font-display text-[#17171c] mb-1 tracking-tight">{pkg.price}</div>
                  <div className="text-xs uppercase text-[#75758a] font-mono mb-4">{pkg.period} • {pkg.turnaround}</div>
                  <p className="text-[#616161] text-xs sm:text-sm font-sans mb-8 leading-relaxed">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8 pt-4 border-t border-[#d9d9dd]">
                    {pkg.deliverables.slice(0, 6).map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#212121] font-sans">
                        <CheckCircle2 size={15} className="text-[#003c33] flex-shrink-0" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={`/contact?package=${pkg.id}`} 
                  aria-label={`Select ${pkg.name} Package and request proposal`}
                  className={`w-full text-center py-3.5 px-6 rounded-full font-medium font-sans text-xs uppercase tracking-wider transition-all min-h-[44px] flex items-center justify-center cursor-pointer ${
                    pkg.recommended 
                      ? "btn-primary" 
                      : "btn-pill-outline"
                  }`}
                >
                  Choose {pkg.name}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/packages"
              className="btn-secondary text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span>View Full Side-by-Side Comparison &amp; Add-Ons</span>
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto cv-auto" aria-labelledby="faq-heading">
          <div className="text-center mb-16">
            <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-2 block">
              Clear Answers
            </span>
            <h2 id="faq-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] uppercase tracking-[-0.48px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { 
                q: "How long does a typical website design & build take?", 
                a: "A standard bespoke website typically takes 3 to 6 weeks from kick-off to launch. We provide a milestone timeline before starting so you always know when each phase is delivered." 
              },
              { 
                q: "Why do you hand-code with Next.js instead of using WordPress templates?", 
                a: "Generic templates are weighed down with heavy plugins that slow down your website, damage your Google SEO rankings, and break frequently. Hand-coding with Next.js gives you sub-second loading speeds, bulletproof security, and complete design freedom." 
              },
              { 
                q: "What makes your SEO services different?", 
                a: "We don't sell empty automated reports. We focus on what actually brings paying customers: making your site load instantly on phones, setting up Google search and map listings properly, and targeting the exact terms your buyers search for." 
              },
              { 
                q: "Do I own 100% of the website and code after launch?", 
                a: "Yes. Once the final invoice is settled, you retain full ownership of all design files (Figma), source code, domain, and assets. There are no lock-in fees or hostage contracts." 
              },
              { 
                q: "What do you need from me to get started?", 
                a: "Simply reach out via our contact page. We'll schedule a 20-minute strategy call to understand your business goals, target audience, and provide a clear, no-obligation quote." 
              }
            ].map((item, i) => (
              <details key={i} className="group rounded-[12px] border border-[#e5e7eb] bg-white transition-all">
                <summary className="p-6 cursor-pointer flex justify-between items-center list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17171c] rounded-[12px]">
                  <span className="text-[#17171c] font-bold font-display uppercase text-sm sm:text-base tracking-tight pr-4">{item.q}</span>
                  <div className="size-7 rounded-full bg-[#eeece7] flex items-center justify-center flex-shrink-0 group-open:rotate-45 transition-transform" aria-hidden="true">
                    <svg className="w-3.5 h-3.5 text-[#17171c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-[#616161] text-sm font-sans leading-relaxed border-t border-[#f0f0f0] pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
