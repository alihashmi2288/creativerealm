import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Gauge, 
  Clock, 
  Lock
} from "lucide-react";
import { 
  packagesData, 
  comparisonFeatures, 
  addOnServices, 
  packagesFaqs 
} from "@/lib/packages";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ProposalDialog from "@/components/ProposalDialog";

export const metadata: Metadata = {
  title: "Investment Packages & Pricing | Bespoke Web Design & Next.js Development",
  description: "Explore transparent fixed-price web design and Next.js development packages in USD ($). Guaranteed 98+ PageSpeed, 100% code ownership, and Google SEO architecture.",
  openGraph: {
    title: "Investment Packages & Pricing | Creative Realm Designs",
    description: "Explore transparent fixed-price web design and Next.js development packages in USD ($). Guaranteed 98+ PageSpeed, 100% code ownership, and Google SEO architecture.",
    url: "https://creative-realm-designs-getj.vercel.app/packages",
    siteName: "Creative Realm Designs",
    type: "website",
  },
  alternates: {
    canonical: "/packages"
  }
};

export default function PackagesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Creative Realm Designs Packages",
    "description": "Bespoke website design, Next.js web development, and Google SEO packages.",
    "itemListElement": packagesData.map((pkg, idx) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": pkg.name,
        "description": pkg.description,
      },
      "price": pkg.price.replace(/[^0-9]/g, "") || "11500",
      "priceCurrency": "USD",
      "position": idx + 1
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="py-12 sm:py-20 md:py-24 px-6 sm:px-12 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20 text-center">
            <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-3 block">
              Predictable Investment • Zero Surprises
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-display text-[#17171c] uppercase tracking-[-1.44px] mb-6">
              Web Design Packages <br className="hidden sm:inline" />
              Built for <span className="text-[#003c33]">Measurable ROI</span>
            </h1>
            <p className="text-[#616161] max-w-2xl mx-auto text-base sm:text-lg font-sans mb-8">
              Fixed-price scopes in US Dollars ($), zero hidden extras, and guaranteed 98+ Google PageSpeed. Every package includes full 100% intellectual property ownership from day one.
            </p>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#fafaf9] border border-[#e5e7eb] text-xs font-mono text-[#616161]">
              <span className="w-2 h-2 rounded-full bg-[#003c33]" aria-hidden="true" />
              <span>Currently accepting 2 new projects for this month</span>
            </div>
          </header>

          {/* Packages 3-Card Grid */}
          <section aria-labelledby="packages-grid-heading" className="mb-20 sm:mb-28">
            <h2 id="packages-grid-heading" className="sr-only">Available Service Packages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {packagesData.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`p-8 sm:p-10 relative flex flex-col justify-between rounded-[16px] transition-all ${
                    pkg.recommended 
                      ? "border-2 border-[#17171c] bg-[#eeece7] shadow-md" 
                      : "border border-[#e5e7eb] bg-[#fafaf9] hover:border-[#d9d9dd]"
                  }`}
                >
                  <div>
                    {pkg.badge && (
                      <div className="mb-3">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#17171c] text-white text-[10px] font-mono uppercase tracking-wider font-medium">
                          {pkg.badge}
                        </span>
                      </div>
                    )}

                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] uppercase tracking-tight mb-2">
                      {pkg.name}
                    </h3>
                    
                    <p className="text-[#75758a] text-xs font-sans mb-6 min-h-[32px]">
                      {pkg.tagline}
                    </p>

                    <div className="mb-6 p-5 rounded-[12px] bg-white border border-[#e5e7eb]">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-3xl sm:text-4xl font-bold font-display text-[#17171c] tracking-tight">
                          {pkg.price}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-[#75758a] font-mono">
                          {pkg.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#003c33] font-mono font-medium">
                        <Clock size={13} aria-hidden="true" />
                        <span>Timeline: {pkg.turnaround}</span>
                      </div>
                    </div>

                    <p className="text-[#616161] text-xs sm:text-sm font-sans leading-relaxed mb-6">
                      {pkg.description}
                    </p>

                    <div className="pt-4 border-t border-[#d9d9dd] mb-8">
                      <div className="text-[11px] uppercase font-mono font-bold text-[#75758a] mb-3 tracking-wider">
                        Included Deliverables:
                      </div>
                      <ul className="space-y-3">
                        {pkg.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#212121] font-sans">
                            <CheckCircle2 size={16} className="text-[#003c33] flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 text-[11px] text-[#75758a] font-sans italic">
                      Ideal for: {pkg.idealFor}
                    </div>

                    <ProposalDialog defaultPackage={pkg.name}>
                      <button
                        type="button"
                        aria-label={`Select ${pkg.name} Package and request proposal`}
                        className={`w-full text-center py-3.5 min-h-[44px] rounded-full font-medium font-sans text-xs uppercase tracking-wider transition-all block cursor-pointer ${
                          pkg.recommended 
                            ? "btn-primary" 
                            : "btn-pill-outline"
                        }`}
                      >
                        <span>Choose {pkg.name}</span>
                      </button>
                    </ProposalDialog>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Guarantees Strip */}
          <section className="mb-16 sm:mb-24 md:mb-32 p-8 sm:p-12 rounded-[22px] bg-[#eeece7] border border-[#e5e7eb]" aria-labelledby="guarantees-heading">
            <h2 id="guarantees-heading" className="sr-only">Our Triple Assurance Guarantees</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-[8px] bg-white border border-[#e5e7eb] flex items-center justify-center text-[#17171c] flex-shrink-0" aria-hidden="true">
                  <Gauge size={22} />
                </div>
                <div>
                  <h3 className="text-[#17171c] font-bold font-display uppercase text-sm tracking-wider mb-1">
                    98+ Google PageSpeed
                  </h3>
                  <p className="text-[#616161] text-xs sm:text-sm font-sans leading-relaxed">
                    Zero bloated page builders. Hand-coded Next.js architecture guarantees instantaneous page loads and green Core Web Vitals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-12 rounded-[8px] bg-white border border-[#e5e7eb] flex items-center justify-center text-[#17171c] flex-shrink-0" aria-hidden="true">
                  <Lock size={22} />
                </div>
                <div>
                  <h3 className="text-[#17171c] font-bold font-display uppercase text-sm tracking-wider mb-1">
                    100% IP &amp; Code Ownership
                  </h3>
                  <p className="text-[#616161] text-xs sm:text-sm font-sans leading-relaxed">
                    You hold complete ownership of your Figma designs, GitHub repository, and assets with zero license lock-ins or hostage fees.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="size-12 rounded-[8px] bg-white border border-[#e5e7eb] flex items-center justify-center text-[#17171c] flex-shrink-0" aria-hidden="true">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="text-[#17171c] font-bold font-display uppercase text-sm tracking-wider mb-1">
                    Transparent Milestones
                  </h3>
                  <p className="text-[#616161] text-xs sm:text-sm font-sans leading-relaxed">
                    Clear 50/50 stage payments tied directly to milestone approvals. You test and verify your website before final deployment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Side-by-side Table: Cohere Research Table Style */}
          <section className="mb-16 sm:mb-24 md:mb-32" aria-labelledby="comparison-heading">
            <div className="text-center mb-16">
              <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-2 block">
                Side-by-Side Analysis
              </span>
              <h2 id="comparison-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] uppercase tracking-[-0.48px]">
                Detailed Package Comparison
              </h2>
              <p className="text-[#616161] font-sans text-sm sm:text-base max-w-xl mx-auto mt-2">
                Evaluate every feature, technology, and deliverable across each tier to select the ideal scope for your business.
              </p>
            </div>

            <div className="overflow-x-auto rounded-[16px] border border-[#d9d9dd] bg-white">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr className="border-b border-[#d9d9dd] bg-[#fafaf9]">
                    <th scope="col" className="p-5 text-xs font-mono uppercase tracking-wider text-[#75758a] w-2/5">
                      Scope &amp; Capabilities
                    </th>
                    <th scope="col" className="p-5 text-center text-xs font-mono uppercase tracking-wider text-[#17171c] w-1/5">
                      Starter Showcase
                      <span className="block text-[#17171c] font-bold text-sm mt-1">$3,200</span>
                    </th>
                    <th scope="col" className="p-5 text-center text-xs font-mono uppercase tracking-wider text-[#003c33] w-1/5 bg-[#edfce9]/40 border-x border-[#d9d9dd]">
                      Growth Engine
                      <span className="block text-[#003c33] font-bold text-sm mt-1">$5,800</span>
                    </th>
                    <th scope="col" className="p-5 text-center text-xs font-mono uppercase tracking-wider text-[#17171c] w-1/5">
                      Scale &amp; Authority
                      <span className="block text-[#17171c] font-bold text-sm mt-1">$11,500+</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((group) => (
                    <Fragment key={group.category}>
                      <tr>
                        <th colSpan={4} scope="colgroup" className="bg-[#eeece7] px-5 py-2.5 font-mono font-medium text-xs uppercase tracking-wider text-[#17171c] border-t border-b border-[#d9d9dd] text-left">
                          {group.category}
                        </th>
                      </tr>
                      {group.features.map((feature, fIdx) => (
                        <tr key={feature.name} className={`border-b border-[#e5e7eb] hover:bg-[#fafaf9] transition-colors ${fIdx % 2 === 0 ? "bg-white" : "bg-[#fdfdfd]"}`}>
                          <th scope="row" className="p-4 font-sans text-xs sm:text-sm font-normal text-[#212121]">
                            {feature.name}
                          </th>

                          <td className="p-4 text-center font-sans text-xs sm:text-sm text-[#616161]">
                            {typeof feature.starter === "boolean" ? (
                              feature.starter ? (
                                <CheckCircle2 size={16} className="text-[#003c33] mx-auto" aria-label="Included" />
                              ) : (
                                <span className="text-[#93939f] font-bold" aria-label="Not included">-</span>
                              )
                            ) : (
                              <span>{feature.starter}</span>
                            )}
                          </td>

                          <td className="p-4 text-center font-sans text-xs sm:text-sm text-[#003c33] font-medium bg-[#edfce9]/20 border-x border-[#d9d9dd]">
                            {typeof feature.growth === "boolean" ? (
                              feature.growth ? (
                                <CheckCircle2 size={16} className="text-[#003c33] mx-auto" aria-label="Included" />
                              ) : (
                                <span className="text-[#93939f] font-bold" aria-label="Not included">-</span>
                              )
                            ) : (
                              <span className="font-semibold">{feature.growth}</span>
                            )}
                          </td>

                          <td className="p-4 text-center font-sans text-xs sm:text-sm text-[#616161]">
                            {typeof feature.scale === "boolean" ? (
                              feature.scale ? (
                                <CheckCircle2 size={16} className="text-[#003c33] mx-auto" aria-label="Included" />
                              ) : (
                                <span className="text-[#93939f] font-bold" aria-label="Not included">-</span>
                              )
                            ) : (
                              <span>{feature.scale}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Add-on Services */}
          <section className="mb-20 sm:mb-28" aria-labelledby="addons-heading">
            <div className="text-center mb-16">
              <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-2 block">
                Modular Capabilities
              </span>
              <h2 id="addons-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] uppercase tracking-[-0.48px]">
                Strategic Add-Ons &amp; Retainers
              </h2>
              <p className="text-[#616161] font-sans text-sm sm:text-base max-w-xl mx-auto mt-2">
                Enhance your build with dedicated monthly support, bespoke editorial blogs, or search ranking accelerations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {addOnServices.map((addon) => (
                <div key={addon.name} className="p-8 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb] flex flex-col justify-between hover:border-[#d9d9dd] transition-all">
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <h3 className="text-xl font-bold font-display text-[#17171c] uppercase tracking-tight">
                        {addon.name}
                      </h3>
                      <div className="text-right">
                        <span className="text-2xl font-bold font-display text-[#17171c]">{addon.price}</span>
                        <span className="text-xs text-[#75758a] font-mono ml-1">{addon.cadence}</span>
                      </div>
                    </div>
                    <p className="text-[#616161] text-xs sm:text-sm font-sans leading-relaxed mb-6">
                      {addon.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {addon.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-[#212121] font-sans">
                          <CheckCircle2 size={14} className="text-[#003c33] flex-shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-between w-full min-h-[44px] py-3 px-6 rounded-full bg-white border border-[#d9d9dd] hover:border-[#17171c] text-[#17171c] font-sans text-xs uppercase font-medium tracking-wider transition-all"
                  >
                    <span>Inquire About {addon.name}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs Accordion */}
          <section className="max-w-4xl mx-auto mb-20 sm:mb-28" aria-labelledby="packages-faq-heading">
            <div className="text-center mb-16">
              <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-2 block">
                Common Inquiries
              </span>
              <h2 id="packages-faq-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] uppercase tracking-[-0.48px]">
                Pricing &amp; Billing FAQs
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {packagesFaqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="rounded-[12px] border border-[#e5e7eb] px-6 py-2 bg-white data-[state=open]:border-[#17171c] transition-colors"
                >
                  <AccordionTrigger className="text-[#17171c] hover:text-[#ff7759] font-bold font-display uppercase text-sm sm:text-base tracking-tight text-left py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#616161] text-sm font-sans leading-relaxed border-t border-[#f0f0f0] pt-4 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Final Package CTA */}
          <section className="p-10 sm:p-16 rounded-[22px] border border-[#e5e7eb] text-center relative overflow-hidden bg-[#eeece7]">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-3 block">
                Start Your Project
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] uppercase tracking-[-0.48px] mb-6">
                Ready for a Website That Converts?
              </h2>
              <p className="text-[#616161] text-sm sm:text-base font-sans leading-relaxed mb-8">
                Book a 20-minute strategy session with our lead creative director and technical specialist. We&apos;ll analyze your goals and provide an actionable proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="btn-primary py-3.5 px-8 text-xs uppercase tracking-wider font-medium"
                >
                  Request Project Proposal
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary py-3.5 px-4 text-xs uppercase tracking-wider font-medium"
                >
                  <span>Explore Core Services</span>
                  <ArrowRight size={13} className="ml-1 inline" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
