"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";

import { projects } from "@/lib/projects";

export default function ProjectDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  
  const project = projects.find(p => p.slug === slug);
  
  if (!project) {
    return (
      <div className="py-32 text-center text-[#212121] bg-white">
        <h1 className="text-3xl font-bold mb-4 font-display text-[#17171c]">Case Study Not Found</h1>
        <Link href="/portfolio" className="btn-secondary text-sm">
          Return to All Work
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-20 md:py-24 px-6 sm:px-12 md:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/portfolio" 
          className="btn-pill-outline mb-12 text-xs uppercase tracking-wider inline-flex items-center gap-2"
        >
          <ArrowLeft size={13} aria-hidden="true" />
          Back to Portfolio
        </Link>
        
        <header className="mb-16 sm:mb-20">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-2.5 py-0.5 rounded-full bg-[#fff1ee] border border-[#ffad9b] text-[#ff7759] font-mono text-xs uppercase tracking-wider font-medium">
              {project.category}
            </span>
            <span className="text-[#93939f] text-xs" aria-hidden="true">•</span>
            <span className="text-[#75758a] text-xs font-mono uppercase tracking-wider">
              {project.clientIndustry}
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-normal font-display text-[#17171c] uppercase tracking-[-1.92px] mb-8 leading-none">
            {project.title}
          </h1>
          <p className="text-[#616161] text-lg md:text-xl font-sans max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </header>

        {/* Hero Photo Card */}
        <div className="p-3 rounded-[22px] overflow-hidden mb-16 sm:mb-20 bg-[#eeece7] border border-[#e5e7eb] shadow-sm">
          <div className="relative aspect-video rounded-[16px] overflow-hidden">
            <Image 
              src={project.image} 
              alt={`Detailed case study preview for ${project.title}`} 
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8 space-y-10">
            <section aria-labelledby="challenge-heading" className="p-8 sm:p-10 rounded-[16px] bg-white border border-[#d9d9dd]">
              <span className="text-xs uppercase tracking-widest text-[#ff7759] font-mono font-medium block mb-2">01 / The Challenge</span>
              <h2 id="challenge-heading" className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] uppercase mb-4 tracking-tight">
                Identifying the Growth Bottleneck
              </h2>
              <p className="text-[#616161] text-base md:text-lg font-sans leading-relaxed">
                {project.challenge}
              </p>
            </section>

            <section aria-labelledby="solution-heading" className="p-8 sm:p-10 rounded-[16px] bg-white border border-[#d9d9dd]">
              <span className="text-xs uppercase tracking-widest text-[#003c33] font-mono font-medium block mb-2">02 / Strategic Solution</span>
              <h2 id="solution-heading" className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] uppercase mb-4 tracking-tight">
                Design &amp; Engineering Implementation
              </h2>
              <p className="text-[#616161] text-base md:text-lg font-sans leading-relaxed">
                {project.solution}
              </p>
            </section>

            <section aria-labelledby="deliverables-heading" className="p-8 sm:p-10 rounded-[16px] bg-white border border-[#d9d9dd]">
              <span className="text-xs uppercase tracking-widest text-[#17171c] font-mono font-medium block mb-2">03 / Scope Delivered</span>
              <h2 id="deliverables-heading" className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] uppercase mb-6 tracking-tight">
                Delivered Capabilities
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-center gap-3 p-4 rounded-[12px] bg-[#fafaf9] border border-[#e5e7eb] font-sans text-sm text-[#212121]">
                    <CheckCircle2 className="text-[#003c33] w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          
          <aside className="lg:col-span-4 space-y-6" aria-label="Project statistics & outcomes">
            <div className="p-8 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb]">
              <h3 className="text-[#17171c] font-bold font-display text-xl uppercase mb-6 tracking-tight">
                Verified Outcomes
              </h3>
              <ul className="space-y-6">
                {project.metrics.map((m) => (
                  <li key={m.label} className="border-b border-[#d9d9dd] pb-4 last:border-b-0 last:pb-0">
                    <div className="text-4xl font-bold font-display text-[#17171c] mb-1">{m.value}</div>
                    <div className="text-[#75758a] text-xs font-mono uppercase tracking-widest">{m.label}</div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-[16px] bg-[#003c33] text-white text-center space-y-5">
              <h4 className="text-white font-bold font-display text-lg uppercase tracking-tight">
                Need Similar Results for Your Business?
              </h4>
              <p className="text-[#d9d9dd] text-xs sm:text-sm font-sans leading-relaxed">
                Let&apos;s discuss how we can redesign, build, or optimize your website for measurable organic growth.
              </p>
              <Link 
                href="/contact" 
                className="btn-white-pill w-full text-xs uppercase tracking-wider py-3 inline-flex items-center justify-center gap-2"
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
