"use client";

import { useState } from "react";
import { 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Layers, 
  Check, 
  ShieldCheck, 
  ArrowRight 
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import ShinyText from "@/components/react-bits/ShinyText";
import ProposalDialog from "@/components/ProposalDialog";

interface AddOnOption {
  id: string;
  label: string;
  desc: string;
  price: number;
  weeks: number;
}

const addOnOptions: AddOnOption[] = [
  {
    id: "cms",
    label: "CMS Integration",
    desc: "Sanity or Contentful visual editing for non-technical editors",
    price: 600,
    weeks: 1,
  },
  {
    id: "performance-sla",
    label: "98+ PageSpeed SLA",
    desc: "Guaranteed Core Web Vitals pass & sub-second LCP optimization",
    price: 500,
    weeks: 0,
  },
  {
    id: "motion",
    label: "Custom Micro-Interactions",
    desc: "Tailored GPU-accelerated hover effects & entrance transitions",
    price: 650,
    weeks: 1,
  },
  {
    id: "seo-schema",
    label: "Advanced Schema Suite",
    desc: "Rich snippet JSON-LD, canonical routing & sitemap automation",
    price: 450,
    weeks: 0,
  },
];

export default function ProjectScopeEstimator() {
  const [selectedService, setSelectedService] = useState<string>("design");
  const [pageCount, setPageCount] = useState<number>(5);
  const [activeAddOns, setActiveAddOns] = useState<string[]>(["performance-sla"]);

  const serviceEstimates = {
    design: {
      title: "Bespoke Website Design",
      tagline: "High-contrast, brand-aligned visual architecture crafted from scratch.",
      baseWeeks: 2,
      basePrice: 1800,
      perPagePrice: 200,
      deliverables: [
        "User Flow & Wireframe Mapping",
        "Interactive Clickable Figma Prototype",
        "Mobile-First Responsive Layouts",
        "Design System Tokens & SVG Assets"
      ],
      idealFor: "Brands seeking a high-converting visual presence without generic template patterns."
    },
    dev: {
      title: "Modern Web Development",
      tagline: "Hand-coded Next.js clean architecture that responds instantly across all viewports.",
      baseWeeks: 3,
      basePrice: 2800,
      perPagePrice: 300,
      deliverables: [
        "Modern Next.js & React Clean Architecture",
        "98+ Google PageSpeed Optimization",
        "Comprehensive Mobile & Cross-Browser Validation",
        "WCAG Accessibility Compliance & Security Hardening"
      ],
      idealFor: "Companies requiring an ultra-responsive, secure web app with instantaneous page loads."
    },
    seo: {
      title: "Search Engine Optimization (SEO)",
      tagline: "Structured keyword architecture and technical foundation for Google rankings.",
      baseWeeks: 2,
      basePrice: 1200,
      perPagePrice: 150,
      deliverables: [
        "Comprehensive Technical SEO Audit",
        "High-Intent Keyword Architecture",
        "Rich Snippet Schema Markup & Metadata",
        "Google Search Console & Analytics Tracking"
      ],
      idealFor: "Founders seeking steady organic traffic and consistent qualified inbound inquiries."
    }
  };

  const activeScope = serviceEstimates[selectedService as keyof typeof serviceEstimates] || serviceEstimates.design;
  
  // Calculate add-on totals
  const addOnsTotal = activeAddOns.reduce((total, id) => {
    const item = addOnOptions.find((opt) => opt.id === id);
    return total + (item ? item.price : 0);
  }, 0);

  const addOnsWeeks = activeAddOns.reduce((total, id) => {
    const item = addOnOptions.find((opt) => opt.id === id);
    return total + (item ? item.weeks : 0);
  }, 0);

  const estimatedWeeks = activeScope.baseWeeks + Math.floor(pageCount / 4) + addOnsWeeks;
  const estimatedInvestment = activeScope.basePrice + (pageCount - 1) * activeScope.perPagePrice + addOnsTotal;

  const toggleAddOn = (id: string) => {
    setActiveAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const scopeSummaryDescription = `${activeScope.title} (${pageCount} Pages, ${activeAddOns.length} Add-ons) ~ $${estimatedInvestment.toLocaleString()}`;

  return (
    <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-[#fafaf9] border-y border-[#e5e7eb] cv-auto" aria-labelledby="scope-estimator-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-2 block">
            <ShinyText speed="3.5s">Interactive Scope Estimator</ShinyText>
          </span>
          <h2 id="scope-estimator-heading" className="text-3xl md:text-5xl font-bold font-display text-[#17171c] uppercase tracking-tight mb-4">
            Configure Your Project Scope
          </h2>
          <p className="text-[#616161] font-sans text-sm sm:text-base max-w-xl mx-auto">
            Select a service pillar, tune your page count, and toggle technical enhancements to see realistic delivery timelines and investment estimates.
          </p>
        </div>

        <Tabs 
          defaultValue="design" 
          value={selectedService} 
          onValueChange={setSelectedService}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white border border-[#d9d9dd] p-1 rounded-full h-auto flex flex-wrap justify-center gap-1 shadow-sm">
              <TabsTrigger 
                value="design"
                className="rounded-full px-5 py-2 min-h-[40px] text-xs font-sans uppercase tracking-wider font-medium data-[state=active]:bg-[#17171c] data-[state=active]:text-white transition-colors cursor-pointer"
              >
                1. Website Design
              </TabsTrigger>
              <TabsTrigger 
                value="dev"
                className="rounded-full px-5 py-2 min-h-[40px] text-xs font-sans uppercase tracking-wider font-medium data-[state=active]:bg-[#17171c] data-[state=active]:text-white transition-colors cursor-pointer"
              >
                2. Web Development
              </TabsTrigger>
              <TabsTrigger 
                value="seo"
                className="rounded-full px-5 py-2 min-h-[40px] text-xs font-sans uppercase tracking-wider font-medium data-[state=active]:bg-[#17171c] data-[state=active]:text-white transition-colors cursor-pointer"
              >
                3. SEO Growth
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={selectedService} className="mt-0 focus-visible:outline-none">
            <SpotlightCard className="p-6 sm:p-10 md:p-12 rounded-[22px] border border-[#d9d9dd] bg-white relative shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="text-xs uppercase font-mono tracking-wider">
                      <Sparkles className="size-3 mr-1 text-[#ff7759]" aria-hidden="true" />
                      Scope Specifications
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] uppercase tracking-tight mb-2">
                    {activeScope.title}
                  </h3>
                  <p className="text-[#616161] text-xs sm:text-sm font-sans mb-6">
                    {activeScope.tagline}
                  </p>

                  {/* Interactive Page Scope Slider */}
                  <div className="p-6 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb] mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <label htmlFor="scope-slider" className="text-xs font-semibold uppercase tracking-wider text-[#17171c] font-sans flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#ff7759]" aria-hidden="true" />
                        <span>Unique Page Templates</span>
                      </label>
                      <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#17171c] text-white">
                        {pageCount} {pageCount === 1 ? "Page" : "Pages"}
                      </span>
                    </div>

                    <Slider 
                      id="scope-slider"
                      min={1} 
                      max={20} 
                      step={1} 
                      value={[pageCount]} 
                      onValueChange={(val) => setPageCount(val[0])}
                      aria-label="Number of unique pages slider"
                      className="py-4"
                    />

                    {/* Stepped Quick-Select Chips */}
                    <div className="grid grid-cols-4 gap-2 pt-3">
                      {[
                        { count: 1, label: "1 (Landing)" },
                        { count: 5, label: "5 (Standard)" },
                        { count: 10, label: "10 (Growth)" },
                        { count: 20, label: "20+ (Scale)" },
                      ].map((preset) => (
                        <button
                          key={preset.count}
                          type="button"
                          onClick={() => setPageCount(preset.count)}
                          className={`min-h-[40px] px-2 py-2 rounded-full text-xs font-sans transition-all text-center cursor-pointer select-none border ${
                            pageCount === preset.count
                              ? "bg-[#17171c] text-white border-[#17171c] font-semibold"
                              : "bg-white text-[#212121] border-[#d9d9dd] hover:border-[#17171c]"
                          }`}
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Modular Technical Add-ons */}
                  <div className="mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#17171c] font-sans block mb-3">
                      Optional Scope Add-ons:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {addOnOptions.map((opt) => {
                        const isChecked = activeAddOns.includes(opt.id);
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => toggleAddOn(opt.id)}
                            className={`min-h-[48px] p-3.5 rounded-xl text-left flex items-start justify-between gap-3 transition-all cursor-pointer border ${
                              isChecked
                                ? "bg-[#fff8f6] border-[#ff7759] text-[#17171c]"
                                : "bg-white border-[#e5e7eb] text-[#616161] hover:border-[#d9d9dd]"
                            }`}
                          >
                            <div className="flex-1">
                              <div className="text-xs font-semibold font-sans uppercase tracking-wide">
                                <span className={isChecked ? "text-[#ff7759]" : "text-[#17171c]"}>
                                  {opt.label}
                                </span>
                              </div>
                              <p className="text-[11px] text-[#75758a] font-sans mt-0.5 line-clamp-1">
                                {opt.desc}
                              </p>
                              <div className="text-[10px] text-[#ff7759] font-mono mt-1 font-semibold">
                                +${opt.price} USD {opt.weeks > 0 && `• +${opt.weeks} wk`}
                              </div>
                            </div>
                            <div 
                              className={`size-5 rounded-full flex items-center justify-center shrink-0 border transition-all mt-0.5 ${
                                isChecked
                                  ? "bg-[#ff7759] border-[#ff7759] text-white"
                                  : "border-[#d9d9dd] bg-white"
                              }`}
                              aria-hidden="true"
                            >
                              {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Included Deliverables List */}
                  <h4 className="text-[#17171c] text-xs font-semibold uppercase tracking-wider font-sans mb-3">
                    Core Deliverables Included:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeScope.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[#212121] font-sans">
                        <CheckCircle2 size={15} className="text-[#003c33] flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Estimate Summary Panel */}
                <div className="lg:col-span-5 p-6 sm:p-8 rounded-[22px] bg-[#eeece7] border border-[#d9d9dd] text-center flex flex-col justify-between h-full">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#d9d9dd] text-xs text-[#212121] mb-6 font-mono font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#003c33]" aria-hidden="true" />
                      <span>Guaranteed Milestone SLA</span>
                    </div>

                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#75758a] font-sans block mb-1">
                      Estimated Delivery Timeline
                    </span>
                    <div className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] mb-3 flex items-center justify-center gap-2">
                      <Clock className="size-5 text-[#ff7759] shrink-0" aria-hidden="true" />
                      <span>{estimatedWeeks} to {estimatedWeeks + 1} Weeks</span>
                    </div>

                    <div className="my-5 p-5 rounded-xl bg-white border border-[#e5e7eb]">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-[#75758a] font-sans block mb-1">
                        Scope Investment Range
                      </span>
                      <div className="text-2xl sm:text-3xl font-bold font-display text-[#17171c]">
                        ${estimatedInvestment.toLocaleString()} - ${(Math.round(estimatedInvestment * 1.2)).toLocaleString()} <span className="text-xs text-[#75758a] font-normal">USD</span>
                      </div>
                      <div className="text-[11px] text-[#75758a] font-sans mt-2 pt-2 border-t border-[#f0f0f0]">
                        Fixed milestone billing • 50% deposit, 50% on verified launch
                      </div>
                    </div>

                    {/* Scope Config Breakdown */}
                    <div className="text-left p-4 rounded-xl bg-white border border-[#e5e7eb] text-[11px] font-sans text-[#212121] mb-6 space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-[#75758a]">Selected Pillar:</span>
                        <span className="font-semibold text-[#17171c]">{activeScope.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#75758a]">Scope Density:</span>
                        <span className="font-semibold text-[#17171c]">{pageCount} Unique Views</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#75758a]">Add-on Modules:</span>
                        <span className="font-semibold text-[#ff7759]">{activeAddOns.length} Active</span>
                      </div>
                    </div>

                    <p className="text-xs text-[#75758a] font-sans mb-6">
                      Weekly staging deployments and transparent sprint updates. No surprise invoices.
                    </p>
                  </div>

                  <ProposalDialog defaultPackage={scopeSummaryDescription}>
                    <button 
                      type="button"
                      className="btn-primary w-full text-xs uppercase tracking-wider py-3 min-h-[44px] cursor-pointer group flex items-center justify-center gap-2"
                      aria-label={`Inquire about ${activeScope.title}`}
                    >
                      <span>Inquire With This Scope</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </button>
                  </ProposalDialog>
                </div>
              </div>
            </SpotlightCard>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
