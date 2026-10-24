"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { projects, categories, type Project } from "@/lib/projects";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-12 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 sm:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-3 block">Our Proven Work</span>
              <h1 className="text-5xl md:text-8xl font-normal font-display text-[#17171c] uppercase tracking-[-1.92px] leading-[0.95]">
                Selected <br /> <span className="text-[#003c33]">Case Studies</span>
              </h1>
              <p className="text-[#616161] text-base md:text-lg font-sans mt-6 max-w-xl">
                Explore real results across bespoke website design, clean engineering, and targeted organic SEO campaigns.
              </p>
            </div>
            
            {/* Cohere Blog Filter Chips */}
            <div className="flex flex-wrap gap-2 p-1 rounded-full bg-[#fafaf9] border border-[#e5e7eb]" role="tablist" aria-label="Filter projects by category">
              {categories.map(cat => (
                <button 
                  key={cat}
                  role="tab"
                  aria-selected={activeCategory === cat}
                  aria-controls="portfolio-grid"
                  onClick={() => setActiveCategory(cat)}
                  className={`min-h-[40px] px-5 py-2 rounded-full flex items-center justify-center transition-[background-color,color,border-color,transform] duration-160 ease-[var(--ease-out)] active:scale-[0.97] font-medium font-sans text-xs uppercase tracking-wider cursor-pointer border ${
                    activeCategory === cat 
                    ? "bg-[#ff7759] text-white border-[#ff7759]" 
                    : "bg-transparent text-[#616161] border-transparent hover:text-[#17171c] hover:bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 px-6 rounded-[22px] bg-[#eeece7] border border-[#e5e7eb] max-w-xl mx-auto my-12 animate-in fade-in-0 zoom-in-95 duration-250 ease-[var(--ease-out)]">
            <h2 className="text-2xl font-bold font-display text-[#17171c] uppercase tracking-tight mb-3">
              No Projects in &ldquo;{activeCategory}&rdquo;
            </h2>
            <p className="text-[#616161] font-sans text-sm mb-6 leading-relaxed">
              We haven&apos;t published a case study under this specific filter yet. Explore our other client deliverables or view all projects.
            </p>
            <button
              onClick={() => setActiveCategory("All")}
              className="btn-primary text-xs px-6 py-2.5 cursor-pointer"
            >
              Reset to All Projects
            </button>
          </div>
        ) : (
          <div id="portfolio-grid" role="region" aria-label="Portfolio projects" className="grid grid-cols-1 gap-14 sm:gap-20 md:gap-24">
            {filteredProjects.map((project: Project) => (
              <div
                key={project.id}
                className="group transition-opacity duration-250 ease-[var(--ease-out)] animate-in fade-in-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-7 overflow-hidden rounded-[22px] relative aspect-[16/10] bg-[#eeece7] border border-[#d9d9dd] p-3 shadow-sm">
                    <div className="relative w-full h-full overflow-hidden rounded-[16px]">
                      <Image 
                        src={project.image} 
                        alt={`Mockup and visual showcase for ${project.title} - ${project.category}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300 ease-[var(--ease-out)]" 
                        loading="lazy"
                      />
                      <Link 
                        href={`/portfolio/${project.slug}`}
                        aria-label={`Explore ${project.title} project`}
                        className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-250 ease-[var(--ease-out)] flex items-center justify-center backdrop-blur-xs rounded-[16px]"
                      >
                        <div className="w-16 h-16 rounded-full bg-white text-[#17171c] flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-250 ease-[var(--ease-out)] shadow-lg" aria-hidden="true">
                          <ArrowUpRight size={32} />
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#fff1ee] border border-[#ffad9b] text-[#ff7759] font-mono text-[11px] font-medium uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[#93939f] text-xs" aria-hidden="true">•</span>
                      <span className="text-[#75758a] font-mono text-xs uppercase tracking-wider">{project.clientIndustry}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-[#17171c] uppercase tracking-tight mb-4 group-hover:text-[#ff7759] transition-colors">
                      <Link href={`/portfolio/${project.slug}`} className="hover:underline">
                        {project.title}
                      </Link>
                    </h2>
                    
                    <p className="text-[#616161] text-base md:text-lg mb-6 leading-relaxed font-sans">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8 p-5 rounded-[12px] bg-[#eeece7] border border-[#e5e7eb]">
                      {project.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <div className="text-2xl font-bold font-display text-[#17171c]">{m.value}</div>
                          <div className="text-[#75758a] text-[11px] font-mono uppercase tracking-wider">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-white border border-[#d9d9dd] text-[#212121] text-xs font-mono">{tag}</span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/portfolio/${project.slug}`} 
                      aria-label={`Read Case Study - Full case study for ${project.title}`}
                      className="btn-primary text-xs uppercase tracking-wider inline-flex items-center gap-2"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Agency Performance Standards */}
        <section className="mt-20 sm:mt-28 py-14 sm:py-20 border-y border-[#e5e7eb] cv-auto" aria-label="Agency Performance Standards">
          <div className="text-center mb-12">
            <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest block mb-2">Our Standard</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-[#17171c]">
              Every Website We Build Meets These Criteria
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center">
            {[
              { label: "Google PageSpeed Core Metric", value: "98+", sub: "Sub-second load times on mobile" },
              { label: "Average Organic Search Lift", value: "+185%", sub: "Verified across 6-month client audits" },
              { label: "On-Time Launch Guarantee", value: "100%", sub: "Clear milestones with weekly demo check-ins" }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb] text-center">
                <div className="text-5xl font-bold font-display text-[#17171c] mb-2">{stat.value}</div>
                <p className="text-[#17171c] font-sans text-sm uppercase tracking-wider font-bold mb-1">{stat.label}</p>
                <p className="text-[#75758a] text-xs font-sans">{stat.sub}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Cohere Deep Green CTA Band */}
        <section className="mt-20 sm:mt-28 py-16 sm:py-24 text-center relative overflow-hidden rounded-[22px] bg-[#003c33] text-white cv-auto" aria-labelledby="portfolio-cta-heading">
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h2 id="portfolio-cta-heading" className="text-4xl md:text-6xl font-normal font-display text-white uppercase tracking-[-1.44px] mb-6">
              Ready to Upgrade <br /> Your <span className="text-[#ffad9b]">Digital Presence?</span>
            </h2>
            <p className="text-[#d9d9dd] text-base md:text-lg font-sans mb-10 leading-relaxed">
              Get an honest assessment of your current website, design gaps, and Google SEO opportunities.
            </p>
            <Link 
              href="/contact" 
              className="btn-white-pill text-sm px-9 py-3.5"
              aria-label="Schedule free strategy call - Request a consultation with Creative Realm"
            >
              SCHEDULE FREE STRATEGY CALL
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
