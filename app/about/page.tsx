import Image from "next/image";
import Link from "next/link";
import { 
  Palette, 
  Code2, 
  Search, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 sm:mb-24 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-3 block">
              About Creative Realm
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal font-display text-[#17171c] uppercase tracking-[-1.44px] leading-tight mb-6">
              Websites Crafted to <br /> <span className="text-[#003c33]">Build Authority</span>
            </h1>
            <p className="text-[#616161] text-base sm:text-lg font-sans leading-relaxed mb-6">
              Creative Realm was founded with a direct mission: help ambitious businesses stand out with custom websites that load instantly, captivate their ideal audience, and rank on Google.
            </p>
            <p className="text-[#75758a] text-sm sm:text-base font-sans leading-relaxed mb-8">
              We eliminated the traditional agency bloat. You work directly with senior designers, engineers, and SEO specialists who care about your project outcomes as much as you do.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Link href="/contact" className="btn-primary text-xs uppercase tracking-wider px-8 py-3.5 min-h-[44px]">
                Work With Us
              </Link>
              <Link href="/portfolio" className="btn-secondary text-xs uppercase tracking-wider px-4 py-3.5 min-h-[44px]">
                <span>View Our Work</span>
                <ArrowRight size={13} className="ml-1 inline" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <div className="p-3 aspect-[4/5] relative rounded-[22px] overflow-hidden bg-[#eeece7] border border-[#e5e7eb] shadow-sm">
              <div className="relative w-full h-full rounded-[16px] overflow-hidden">
                <Image 
                  src="/about-hero.png" 
                  alt="Creative Realm studio workspace and design collaboration" 
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-[12px] bg-white/95 backdrop-blur-md border border-[#e5e7eb] text-[#212121]">
                  <div className="text-[#ff7759] font-mono text-xs uppercase tracking-wider mb-1 font-medium">Our Standard</div>
                  <div className="text-[#17171c] font-sans text-xs sm:text-sm">Every line of code and pixel of design is crafted purposefully for your business.</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 sm:py-16 border-y border-[#e5e7eb] mb-16 sm:mb-24 cv-auto" aria-label="Core Agency Values">
          {[
            {
              title: "Deliberate Design",
              desc: "We don't use cookie-cutter templates. Every layout, color, and interaction is tailored to reflect your credibility and guide visitors toward taking action."
            },
            {
              title: "Clean Modern Code",
              desc: "We build with Next.js and clean HTML/CSS. This guarantees sub-second page loads, fluid responsiveness, and reliable stability without bloated plugins."
            },
            {
              title: "Proven Search Visibility",
              desc: "From technical schema to keyword hierarchy, we ensure your site is engineered to rank on Google and attract high-intent organic visitors."
            }
          ].map((principle) => (
            <div key={principle.title} className="p-8 rounded-[16px] bg-[#eeece7] border border-[#e5e7eb] hover:border-[#d9d9dd] transition-all">
              <h3 className="text-[#17171c] font-bold font-display text-xl uppercase mb-3 tracking-tight">
                {principle.title}
              </h3>
              <p className="text-[#616161] text-sm leading-relaxed font-sans">
                {principle.desc}
              </p>
            </div>
          ))}
        </section>

        {/* Execution Roadmap */}
        <section className="mb-16 sm:mb-24 cv-auto" aria-labelledby="process-heading">
          <div className="text-center mb-14 sm:mb-16">
            <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-2 block">
              Execution Roadmap
            </span>
            <h2 id="process-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] uppercase tracking-[-0.48px]">
              How We Work Together
            </h2>
            <p className="text-[#616161] font-sans text-sm sm:text-base max-w-xl mx-auto mt-2">
              Predictable milestones, weekly video updates, and zero unexpected surprises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { phase: "Phase 1", time: "Week 1", title: "Strategy & Scope", desc: "We dissect your business goals, target clients, and competitor search footprints to build a clear project blueprint." },
              { phase: "Phase 2", time: "Weeks 2–3", title: "Prototyping", desc: "We design complete interactive Figma prototypes. You test and approve every layout and interaction before code begins." },
              { phase: "Phase 3", time: "Weeks 4–5", title: "Production Build", desc: "We develop your website with Next.js and Tailwind, ensuring instant rendering and flawless mobile performance." },
              { phase: "Phase 4", time: "Week 6", title: "Audit & Launch", desc: "We conduct 98+ PageSpeed audits, connect domain DNS, configure Google Search Console, and launch cleanly." }
            ].map((step) => (
              <div 
                key={step.title}
                className="p-8 rounded-[16px] bg-white border border-[#d9d9dd] flex flex-col justify-between hover:border-[#17171c] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full bg-[#17171c] text-white font-mono text-xs font-bold uppercase">
                      {step.phase}
                    </span>
                    <span className="text-xs text-[#75758a] font-mono">{step.time}</span>
                  </div>
                  <h3 className="text-[#17171c] font-bold font-display text-base uppercase mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-[#616161] text-xs sm:text-sm leading-relaxed font-sans">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Disciplines */}
        <section className="mb-16 sm:mb-24 cv-auto" aria-labelledby="team-heading">
          <div className="text-center mb-14 sm:mb-16">
            <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-2 block">
              Core Disciplines
            </span>
            <h2 id="team-heading" className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] uppercase tracking-[-0.48px]">
              Dedicated Specialists On Every Project
            </h2>
            <p className="text-[#616161] font-sans text-sm sm:text-base max-w-xl mx-auto mt-2">
              Every client project is handled directly by dedicated leads across design, engineering, and SEO.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                role: "UI/UX & Web Design",
                lead: "Creative Direction",
                icon: Palette,
                focus: "Figma Prototypes • Brand Systems • Conversion Flow",
                desc: "Focused on crafting high-end aesthetics that communicate your brand value and make browsing smooth and frictionless."
              },
              {
                role: "Web Engineering",
                lead: "Technical Development",
                icon: Code2,
                focus: "Next.js • Sub-Second Load Speeds • Accessible Code",
                desc: "Translates Figma designs into lightweight, pixel-perfect code engineered for top performance on all mobile and desktop screens."
              },
              {
                role: "SEO & Growth",
                lead: "Search Engine Strategy",
                icon: Search,
                focus: "Technical SEO • Keyword Hierarchy • Google Indexing",
                desc: "Ensures your website structure is fully optimized so search engines index your pages and drive qualified, organic prospective clients."
              }
            ].map((discipline) => (
              <div
                key={discipline.role}
                className="p-8 rounded-[16px] bg-white border border-[#d9d9dd] flex flex-col justify-between hover:border-[#17171c] transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-[8px] bg-[#eeece7] border border-[#e5e7eb] flex items-center justify-center text-[#17171c] mb-6">
                    <discipline.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#ff7759] font-mono font-medium block mb-1">
                    {discipline.lead}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-[#17171c] uppercase mb-3 tracking-tight">
                    {discipline.role}
                  </h3>
                  <p className="text-[#616161] text-sm font-sans leading-relaxed mb-6">
                    {discipline.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#e5e7eb]">
                  <div className="text-[11px] uppercase tracking-wider text-[#75758a] font-mono">
                    {discipline.focus}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cohere Deep Green Feature Band: Agency Commitments */}
        <section className="p-8 sm:p-14 rounded-[22px] bg-[#003c33] text-white mb-24 cv-auto" aria-labelledby="commitments-heading">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-[#002b24] border border-[#004d42] flex items-center justify-center text-[#edfce9] mx-auto mb-4">
              <ShieldCheck className="w-7 h-7" aria-hidden="true" />
            </div>
            <h2 id="commitments-heading" className="text-2xl sm:text-4xl font-normal font-display text-white uppercase tracking-[-0.48px] mb-4">
              Our 4 Agency Commitments to You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mt-10">
              <div className="flex items-start gap-3 p-5 rounded-[12px] bg-[#002b24] border border-[#004d42]">
                <CheckCircle2 className="text-[#edfce9] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-white font-bold font-display text-sm uppercase">100% Code &amp; Asset Ownership</h3>
                  <p className="text-[#d9d9dd] text-xs font-sans mt-1">You own all source code, Figma assets, and credentials upon project completion.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-[12px] bg-[#002b24] border border-[#004d42]">
                <CheckCircle2 className="text-[#edfce9] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-white font-bold font-display text-sm uppercase">98+ PageSpeed Benchmark</h3>
                  <p className="text-[#d9d9dd] text-xs font-sans mt-1">We don't launch sites with slow load times. Every build passes strict speed audits.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-[12px] bg-[#002b24] border border-[#004d42]">
                <CheckCircle2 className="text-[#edfce9] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-white font-bold font-display text-sm uppercase">No Hidden Monthly Fees</h3>
                  <p className="text-[#d9d9dd] text-xs font-sans mt-1">Clear fixed scopes and transparent quotes. No surprise invoices or hostage fees.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-[12px] bg-[#002b24] border border-[#004d42]">
                <CheckCircle2 className="text-[#edfce9] w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="text-white font-bold font-display text-sm uppercase">Direct Communication</h3>
                  <p className="text-[#d9d9dd] text-xs font-sans mt-1">Speak directly with the team designing and coding your project. No confusing bureaucracy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="p-10 sm:p-16 rounded-[22px] text-center cv-auto bg-[#eeece7] border border-[#e5e7eb]">
          <h2 className="text-3xl sm:text-5xl font-normal font-display text-[#17171c] uppercase tracking-[-0.48px] mb-4">
            Let&apos;s Discuss Your Next Website
          </h2>
          <p className="text-[#616161] text-base max-w-lg mx-auto font-sans mb-8">
            Tell us about your project goals. We will provide an honest, no-jargon roadmap to get you there.
          </p>
          <Link href="/contact" className="btn-primary text-sm px-9 py-3.5">
            START YOUR PROJECT
          </Link>
        </section>
      </div>
    </div>
  );
}
