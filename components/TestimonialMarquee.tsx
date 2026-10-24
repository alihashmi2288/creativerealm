"use client";

import Link from "next/link";
import { ArrowRight, Star, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  service: string;
  metric: string;
  metricIcon: "trend" | "zap" | "shield";
  text: string;
  caseStudyUrl: string;
}

const testimonialsRow1: Testimonial[] = [
  {
    name: "Marcus Vance",
    role: "Founder",
    company: "Aura Timepieces",
    service: "E-Commerce Redesign",
    metric: "+42% Mobile Checkout Rate",
    metricIcon: "trend",
    text: "Creative Realm redesigned our store from the ground up. The performance boost was immediate—our mobile conversion rate surged within the first month.",
    caseStudyUrl: "/portfolio/aura-luxury-watches"
  },
  {
    name: "Elena Rostova",
    role: "VP Marketing",
    company: "Apex Horizon",
    service: "SaaS Web Engineering",
    metric: "Sub-0.8s Global TTFB",
    metricIcon: "zap",
    text: "Our previous site took 4 seconds to load and leaked enterprise leads. The Next.js rebuild cut our bounce rate by 55% and doubled demo requests.",
    caseStudyUrl: "/portfolio/apex-horizon-saas"
  },
  {
    name: "Julian Thorne",
    role: "Principal",
    company: "Verve Architecture",
    service: "Bespoke Portfolio & SEO",
    metric: "+185% Organic Visibility",
    metricIcon: "trend",
    text: "We were invisible on Google for high-intent keywords. With Creative Realm's SEO restructure, we achieved 48+ Top 3 rankings within 6 months.",
    caseStudyUrl: "/portfolio/verve-architects"
  }
];

const testimonialsRow2: Testimonial[] = [
  {
    name: "Sarah Lin",
    role: "Co-Founder & COO",
    company: "Stratos Cloud",
    service: "Next.js Web Application",
    metric: "100/100 Core Web Vitals",
    metricIcon: "zap",
    text: "Clean architecture, ultra-clean code, and zero template cliches. Creative Realm delivered on every single milestone without a single delay.",
    caseStudyUrl: "/portfolio"
  },
  {
    name: "Devon Reed",
    role: "Director of Growth",
    company: "Kuro Studio",
    service: "Interactive Brand UI",
    metric: "+64% Inbound Leads",
    metricIcon: "trend",
    text: "The architectural aesthetic sets us completely apart from cookie-cutter competitors. Inbound prospects frequently mention our website craft on introductory calls.",
    caseStudyUrl: "/portfolio"
  },
  {
    name: "Hannah Weiss",
    role: "Managing Partner",
    company: "Beacon Capital",
    service: "Brand UI & Next.js Rebuild",
    metric: "4.8x Lead Velocity",
    metricIcon: "shield",
    text: "Their discipline with accessibility, contrast, and performance is second to none. Our investors and LP partners regularly praise the speed and responsiveness.",
    caseStudyUrl: "/portfolio"
  }
];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div className="relative w-[340px] sm:w-[420px] shrink-0 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb] p-7 flex flex-col justify-between transition-[border-color,box-shadow] duration-200 ease-[var(--ease-out)] hover:border-[#d9d9dd] group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#17171c]">
            {item.service}
          </span>
          <span className="inline-flex items-center text-[11px] font-mono font-medium py-1 px-2.5 rounded-full bg-[#edfce9] text-[#003c33] border border-[#c3eec0]">
            {item.metricIcon === "zap" && <Zap className="w-3 h-3 mr-1 inline" aria-hidden="true" />}
            {item.metricIcon === "trend" && <TrendingUp className="w-3 h-3 mr-1 inline" aria-hidden="true" />}
            {item.metricIcon === "shield" && <ShieldCheck className="w-3 h-3 mr-1 inline" aria-hidden="true" />}
            {item.metric}
          </span>
        </div>

        <div className="flex items-center gap-1 mb-3.5 text-[#ff7759]" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
          ))}
        </div>

        <p className="text-[#212121] text-xs sm:text-sm font-sans leading-relaxed mb-6">
          &ldquo;{item.text}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-[#d9d9dd] flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div 
            className="size-9 rounded-full bg-[#17171c] text-white flex items-center justify-center font-bold text-xs shrink-0" 
            aria-hidden="true"
          >
            {item.name.charAt(0)}
          </div>
          <div>
            <div className="text-[#17171c] font-bold text-xs tracking-tight">
              {item.name}
            </div>
            <div className="text-[#75758a] text-[11px]">
              {item.role}, {item.company}
            </div>
          </div>
        </div>

        <Link
          href={item.caseStudyUrl}
          prefetch={false}
          className="inline-flex items-center gap-1 text-[11px] text-[#17171c] hover:text-[#ff7759] font-medium uppercase tracking-wider min-h-[44px] min-w-[44px] justify-end focus-visible:outline-none focus-visible:underline transition-colors"
          aria-label={`View outcome details for ${item.company}`}
        >
          <span>Proof</span>
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export default function TestimonialMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Edge Gradients for Smooth In/Out Fade */}
      <div 
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" 
        aria-hidden="true"
      />
      <div 
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" 
        aria-hidden="true"
      />

      <Marquee duration="38s" className="mb-4">
        {testimonialsRow1.map((item) => (
          <TestimonialCard key={item.name} item={item} />
        ))}
      </Marquee>

      <Marquee reverse duration="42s">
        {testimonialsRow2.map((item) => (
          <TestimonialCard key={item.name} item={item} />
        ))}
      </Marquee>
    </div>
  );
}
