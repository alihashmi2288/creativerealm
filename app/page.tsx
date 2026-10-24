import Link from "next/link";
import Image from "next/image";
import { 
  Palette, 
  Code2, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Gauge, 
  ShieldCheck, 
  TrendingUp, 
  Clock, 
  Sparkles, 
  PhoneCall, 
  Laptop, 
  Rocket 
} from "lucide-react";
import HeroBackground from "@/components/HeroBackground";
import SpotlightCard from "@/components/react-bits/SpotlightCard";
import BlurText from "@/components/react-bits/BlurText";
import CountUp from "@/components/react-bits/CountUp";
import ShinyText from "@/components/react-bits/ShinyText";
import ProposalDialog from "@/components/ProposalDialog";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center text-center px-6 sm:px-12 md:px-24 overflow-hidden pt-6 pb-16 sm:py-20" aria-labelledby="hero-title">
        <HeroBackground />

        <div className="max-w-5xl z-10 px-4 py-8 sm:py-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="emerald" className="px-3.5 py-1 text-xs uppercase tracking-widest font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#003c33]" aria-hidden="true" />
                <ShinyText speed="3.5s" variant="dark">CUSTOM WEBSITES &amp; GOOGLE SEO</ShinyText>
              </Badge>
            </div>

            <h1 id="hero-title" className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal font-display text-[#17171c] leading-[1.0] uppercase tracking-[-1.92px] mb-8">
              <BlurText 
                text="WE BUILD WEBSITES" 
                delay={50} 
                className="justify-center"
                as="span"
              />
              <br />
              <span className="text-[#ff7759] inline-block">
                <BlurText 
                  text="THAT GROW" 
                  delay={70} 
                  className="justify-center text-[#ff7759]"
                  as="span"
                />
              </span>
              <br />
              <BlurText 
                text="YOUR BUSINESS" 
                delay={90} 
                className="justify-center"
                as="span"
              />
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-[#616161] max-w-2xl mx-auto mb-10 font-normal leading-relaxed font-sans">
              We design and build custom websites that turn casual visitors into paying clients, and get your business ranked on Google. Fast, modern, and built to sell.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
              <ProposalDialog>
                <button
                  type="button"
                  className="btn-primary text-sm px-8 py-3.5 cursor-pointer"
                  aria-label="Get a free proposal - Start your project with Creative Realm"
                >
                  <span>GET A FREE PROPOSAL</span>
                </button>
              </ProposalDialog>
              <Link 
                href="/portfolio" 
                prefetch={false}
                className="btn-secondary text-sm"
                aria-label="View case studies - Explore our work and verified results"
              >
                <span>VIEW OUR WORK</span>
                <ArrowRight className="w-4 h-4 ml-1 inline" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-14 pt-8 border-t border-[#e5e7eb] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-left max-w-4xl mx-auto">
              <div className="rounded-full px-4 py-2.5 flex items-center gap-2.5 bg-[#eeece7] border border-[#e5e7eb] text-[#17171c]">
                <ShieldCheck className="text-[#003c33] w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-mono font-medium">Custom (No Templates)</span>
              </div>
              <div className="rounded-full px-4 py-2.5 flex items-center gap-2.5 bg-[#eeece7] border border-[#e5e7eb] text-[#17171c]">
                <Gauge className="text-[#003c33] w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-mono font-medium">Under 1-Sec Load</span>
              </div>
              <div className="rounded-full px-4 py-2.5 flex items-center gap-2.5 bg-[#eeece7] border border-[#e5e7eb] text-[#17171c]">
                <TrendingUp className="text-[#003c33] w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-mono font-medium">Built to Rank on Google</span>
              </div>
              <div className="rounded-full px-4 py-2.5 flex items-center gap-2.5 bg-[#eeece7] border border-[#e5e7eb] text-[#17171c]">
                <Clock className="text-[#003c33] w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-mono font-medium">Guaranteed Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-[#fafaf9] border-y border-[#e5e7eb] cv-auto" aria-labelledby="philosophy-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-3 block">
                Why Choose Creative Realm
              </span>
              <h2 id="philosophy-heading" className="text-3xl sm:text-4xl md:text-5xl font-normal font-display text-[#17171c] uppercase tracking-[-0.48px] mb-6 leading-tight">
                Most Websites Look Pretty. <br />
                <span className="text-[#003c33]">Ours Actually Sell.</span>
              </h2>
              <p className="text-[#616161] text-base md:text-lg mb-8 leading-relaxed font-sans">
                A slow or confusing website costs you money every day. We build custom websites from the ground up that look professional, open instantly on every smartphone, and guide visitors straight to calling you or submitting an inquiry.
              </p>
              
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e5e7eb]">
                <div className="p-4 rounded-[16px] bg-white text-center border border-[#e5e7eb]">
                  <div className="text-3xl sm:text-4xl font-normal font-display text-[#17171c] mb-1">
                    <CountUp to={98} suffix="+" duration={1.5} />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#75758a] font-mono">Speed Score</div>
                </div>
                <div className="p-4 rounded-[16px] bg-white text-center border border-[#e5e7eb]">
                  <div className="text-3xl sm:text-4xl font-normal font-display text-[#17171c] mb-1">
                    <CountUp to={100} suffix="%" duration={1.5} />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#75758a] font-mono">Custom Built</div>
                </div>
                <div className="p-4 rounded-[16px] bg-white text-center border border-[#e5e7eb]">
                  <div className="text-3xl sm:text-4xl font-normal font-display text-[#17171c] mb-1">
                    <CountUp to={185} prefix="+" suffix="%" duration={1.8} />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#75758a] font-mono">Search Growth</div>
                </div>
              </div>
              <p className="text-[11px] text-[#75758a] font-sans mt-4 leading-normal">
                *Verified across client mobile benchmarks and Google Search Console performance records.
              </p>
            </div>
            
            <div className="relative">
              <div className="p-4 sm:p-6 rounded-[22px] bg-white border border-[#d9d9dd] relative flex flex-col justify-end overflow-hidden group shadow-sm">
                <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden mb-4 bg-[#eeece7]">
                  <Image 
                    src="/clean-design.png" 
                    alt="Showcase of clean, responsive web design mockup built for conversions" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-4 rounded-[12px] bg-[#eeece7] border border-[#e5e7eb]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#003c33]" aria-hidden="true" />
                    <span className="text-[#003c33] text-xs font-mono font-medium uppercase tracking-wider">Built to Turn Clicks Into Calls</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#17171c] uppercase mb-1">Clear Design That Closes Deals</h3>
                  <p className="text-[#616161] text-xs font-sans">Your visitors get a fast, simple experience that guides them straight to calling you or requesting a quote.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 cv-auto" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-16">
            <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-3 block">
              Our Core Services
            </span>
            <h2 id="services-heading" className="text-3xl md:text-5xl font-normal font-display text-[#17171c] uppercase tracking-[-0.48px] mb-4">
              Everything You Need to Win Customers Online
            </h2>
            <p className="text-[#616161] font-sans text-base max-w-xl mx-auto">
              We take care of the design, the coding, and the Google search optimization so your website becomes your #1 salesperson.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Website Design",
                icon: Palette,
                highlight: "Look Professional & Stand Out",
                desc: "We design custom websites tailored to your brand that build trust instantly and make visitors eager to contact you or buy.",
                features: ["Custom Design Mockups", "Mobile-Friendly On Every Phone", "Clear Buttons That Prompt Action", "Matching Brand Colors & Graphics"]
              },
              {
                title: "Web Development",
                icon: Code2,
                highlight: "Fast, Reliable & Secure",
                desc: "We code your website by hand using modern technology. No slow WordPress plugins that break, get hacked, or slow down your page.",
                features: ["Loads In Under A Second", "Works Smoothly On All Browsers", "Easy For Everyone To Use", "Built-In Security & SSL"]
              },
              {
                title: "SEO Services",
                icon: Search,
                highlight: "Get Found On Google",
                desc: "A great website needs visitors. We set up your website so local customers searching for your services find you first.",
                features: ["Targeted Search Keywords", "Google Search Console Setup", "Local Map & Search Optimization", "Fast Indexing On Google"]
              }
            ].map((feature) => (
              <div 
                key={feature.title}
                className="p-8 sm:p-10 flex flex-col justify-between rounded-[16px] relative bg-white border border-[#d9d9dd] hover:border-[#17171c] transition-all duration-200 group"
              >
                <div>
                  <div className="size-12 rounded-[8px] bg-[#eeece7] border border-[#e5e7eb] flex items-center justify-center text-[#17171c] mb-6">
                    <feature.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="text-[#ff7759] text-xs font-mono font-medium uppercase tracking-wider block mb-1">
                    {feature.highlight}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-[#17171c] uppercase mb-4 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[#616161] text-sm leading-relaxed font-sans mb-6">
                    {feature.desc}
                  </p>
                  
                  <ul className="space-y-2.5 pt-4 border-t border-[#e5e7eb] mb-8">
                    {feature.features.map(f => (
                      <li key={f} className="flex items-center gap-2.5 text-xs text-[#212121] font-sans">
                        <CheckCircle2 size={14} className="text-[#003c33] flex-shrink-0" aria-hidden="true" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/services" 
                  prefetch={false}
                  className="btn-secondary text-xs uppercase tracking-wider inline-flex items-center gap-1.5"
                  aria-label={`Explore our ${feature.title} services`}
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process & How We Work: Cohere Deep Enterprise Green Feature Band */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-[#003c33] text-white cv-auto" aria-labelledby="how-we-work-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-16">
            <span className="text-[#edfce9] font-mono text-xs uppercase tracking-widest mb-3 block">
              Simple &amp; Transparent
            </span>
            <h2 id="how-we-work-heading" className="text-3xl md:text-5xl font-normal font-display text-white uppercase tracking-[-0.48px] mb-4">
              How We Build &amp; Launch Your Website
            </h2>
            <p className="text-[#d9d9dd] font-sans text-base max-w-xl mx-auto">
              No complicated technical headaches. We guide you through three simple steps from first call to live website.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: "01",
                icon: PhoneCall,
                title: "Free Strategy Call",
                subtitle: "20 Minutes • Zero Pressure",
                desc: "We discuss your business, what you sell, who your ideal customers are, and what your website needs to achieve. We provide an exact price quote with no surprises."
              },
              {
                step: "02",
                icon: Laptop,
                title: "Custom Design & Build",
                subtitle: "Weekly Reviews & Updates",
                desc: "We design your website from scratch, show you the layout mockups for feedback, and write fast, modern code that looks stunning on every phone and computer."
              },
              {
                step: "03",
                icon: Rocket,
                title: "Launch & Google Setup",
                subtitle: "Go Live & Get Found",
                desc: "We connect your website to your domain, test every button and form, set up your Google search connection, and give you 100% full ownership of your site."
              }
            ].map((item) => (
              <div 
                key={item.step}
                className="p-8 sm:p-10 flex flex-col justify-between rounded-[16px] bg-[#002b24] border border-[#004d42] text-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-12 rounded-[8px] bg-[#003c33] border border-[#005a4d] flex items-center justify-center text-white">
                      <item.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#004d42] text-[#edfce9]">
                      {item.step}
                    </span>
                  </div>
                  <span className="text-[#edfce9] text-xs font-mono font-medium uppercase tracking-wider block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold font-display text-white uppercase mb-4 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[#d9d9dd] text-sm leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Package Selector */}
          <div className="p-6 sm:p-10 rounded-[22px] bg-white text-[#212121] border border-[#e5e7eb] shadow-xl">
            <div className="text-center mb-8">
              <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-2 block">
                Clear Packages
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#17171c] uppercase tracking-tight mb-2">
                Choose the Right Package for Your Goals
              </h3>
              <p className="text-[#616161] text-xs sm:text-sm font-sans max-w-lg mx-auto">
                Transparent fixed pricing with no hidden costs. Every package includes custom design, mobile optimization, and full code ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Starter Website",
                  price: "$3,200",
                  tagline: "Ideal for local businesses and professionals needing a credible, modern site.",
                  features: ["Up to 5 Custom Pages", "Under 1-Sec Load Time", "Basic Google Setup", "Contact Form & Map"],
                  recommended: false
                },
                {
                  name: "Business Growth",
                  price: "$5,800",
                  tagline: "Our complete website package to rank high on Google and drive steady client leads.",
                  features: ["Up to 10 Custom Pages", "Complete Local Google SEO", "Full Mobile Experience", "Lead Capture & Booking"],
                  recommended: true
                },
                {
                  name: "Custom / Store",
                  price: "$11,500",
                  tagline: "For businesses selling online or requiring custom client portals and catalogs.",
                  features: ["Unlimited Custom Pages", "E-Commerce or Portal", "Advanced Search Ranking", "Ongoing Speed Support"],
                  recommended: false
                }
              ].map((pkg) => (
                <div 
                  key={pkg.name}
                  className={`p-6 sm:p-8 rounded-[16px] flex flex-col justify-between transition-all ${
                    pkg.recommended 
                      ? "bg-[#eeece7] border-2 border-[#17171c]" 
                      : "bg-[#fafaf9] border border-[#e5e7eb]"
                  }`}
                >
                  <div>
                    {pkg.recommended && (
                      <Badge variant="default" className="text-[10px] uppercase font-mono tracking-wider mb-2">
                        Most Popular Choice
                      </Badge>
                    )}
                    <h4 className="text-xl font-bold font-display text-[#17171c] uppercase mb-1">
                      {pkg.name}
                    </h4>
                    <div className="text-3xl font-bold font-display text-[#17171c] mb-3">
                      {pkg.price}
                    </div>
                    <p className="text-[#616161] text-xs font-sans mb-6 leading-relaxed">
                      {pkg.tagline}
                    </p>
                    <ul className="space-y-2 mb-6 pt-4 border-t border-[#d9d9dd]">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-[#212121] font-sans">
                          <CheckCircle2 size={13} className="text-[#003c33] flex-shrink-0" aria-hidden="true" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ProposalDialog defaultPackage={pkg.name}>
                    <button
                      type="button"
                      className={`w-full py-3 px-4 rounded-full font-sans text-xs font-medium uppercase tracking-wider cursor-pointer min-h-[44px] transition-all ${
                        pkg.recommended 
                          ? "btn-primary" 
                          : "btn-pill-outline"
                      }`}
                      aria-label={`Get started with ${pkg.name}`}
                    >
                      Choose {pkg.name}
                    </button>
                  </ProposalDialog>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/packages"
                prefetch={false}
                className="btn-secondary text-xs uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>View Full Feature Comparison &amp; Add-Ons</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Standards Guarantee Section */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-[#fafaf9] border-b border-[#e5e7eb] cv-auto" aria-label="Our measurable agency standards">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-16">
            <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-2 block">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-5xl font-normal font-display text-[#17171c] uppercase tracking-[-0.48px]">
              Standards We Guarantee On Every Project
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Under 1-Sec Speed", count: 98, suffix: "+", desc: "Opens instantly on mobile data and wifi" },
              { label: "More Google Search Visits", count: 185, prefix: "+", suffix: "%", desc: "Measured across client 6-month growth" },
              { label: "On-Time Delivery", count: 100, suffix: "%", desc: "Clear deadlines and weekly progress updates" },
              { label: "Works On Every Phone", staticText: "100%", desc: "Tested and refined for all screen sizes" }
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-8 rounded-[16px] bg-white border border-[#e5e7eb] text-center"
              >
                <div className="text-5xl sm:text-6xl font-normal font-display text-[#17171c] mb-3 tracking-tight">
                  {stat.staticText ? (
                    stat.staticText
                  ) : (
                    <CountUp to={stat.count!} prefix={stat.prefix || ""} suffix={stat.suffix || ""} duration={1.6} />
                  )}
                </div>
                <div className="text-xs uppercase tracking-wider text-[#17171c] font-bold mb-1.5 font-sans">{stat.label}</div>
                <div className="text-xs text-[#75758a] font-sans">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Client Projects */}
      <section className="py-16 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 cv-auto" aria-labelledby="portfolio-teaser-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 sm:mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-3 block">
                Proven Results
              </span>
              <h2 id="portfolio-teaser-heading" className="text-4xl md:text-6xl font-normal font-display text-[#17171c] uppercase tracking-[-1.2px] leading-none">
                Featured <br /> Client Projects
              </h2>
            </div>
            <Link 
              href="/portfolio" 
              prefetch={false}
              className="btn-pill-outline text-xs uppercase tracking-wider px-6 py-3 min-h-[44px] group flex items-center gap-2"
              aria-label="View selected case studies - View full portfolio"
            >
              <span>Explore All Projects</span>
              <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Aura Timepieces Online Store",
                category: "Website Design & Online Store",
                tag: "+42% Mobile Orders",
                desc: "Custom-designed store with fast product browsing and simple checkout, leading to immediate record sales.",
                image: "/projects/aura-watch.png",
                slug: "aura-luxury-watches"
              },
              {
                title: "Apex Horizon Software Platform",
                category: "Web Development",
                tag: "Under 1-Sec Load",
                desc: "Modern corporate website built to explain complex software simply and double inbound client demo bookings.",
                image: "/projects/apex-horizon.png",
                slug: "apex-horizon-saas"
              },
              {
                title: "Verve Architecture Studio",
                category: "Custom Design & Google SEO",
                tag: "Top 3 Google Rank",
                desc: "High-end visual portfolio website that positioned the firm as the #1 luxury architect in their region.",
                image: "/projects/verve-architects.png",
                slug: "verve-architects"
              }
            ].map((project) => (
              <div 
                key={project.title}
                className="p-6 flex flex-col justify-between rounded-[22px] bg-white border border-[#d9d9dd] hover:border-[#17171c] transition-all duration-200"
              >
                <div>
                  <div className="relative aspect-[16/10] rounded-[16px] overflow-hidden mb-6 bg-[#eeece7] border border-[#e5e7eb]">
                    <Image 
                      src={project.image} 
                      alt={`Screenshot of ${project.title} web project`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#17171c] text-white">
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  <span className="text-[#ff7759] text-xs font-mono font-medium uppercase tracking-wider block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold font-display text-[#17171c] uppercase mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#616161] text-xs font-sans line-clamp-2 mb-6">
                    {project.desc}
                  </p>
                </div>

                <Link 
                  href={`/portfolio/${project.slug}`}
                  prefetch={false}
                  className="btn-secondary text-xs uppercase tracking-wider inline-flex items-center gap-1.5"
                  aria-label={`Read case study for ${project.title}`}
                >
                  <span>View Case Study</span>
                  <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-14 sm:py-20 md:py-24 px-5 sm:px-10 md:px-20 bg-[#fafaf9] border-y border-[#e5e7eb] cv-auto" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-16">
            <span className="text-[#ff7759] font-mono text-xs uppercase tracking-widest mb-3 block">
              Client Results
            </span>
            <h2 id="testimonials-heading" className="text-3xl md:text-5xl font-normal font-display text-[#17171c] uppercase tracking-[-0.48px]">
              Real Results for Growing Businesses
            </h2>
          </div>

          <TestimonialMarquee />
        </div>
      </section>

      {/* Final Call to Action: Cohere Deep Enterprise Green Band */}
      <section className="py-16 sm:py-24 px-5 sm:px-10 cv-auto" aria-labelledby="cta-heading">
        <div className="relative z-10 max-w-5xl mx-auto rounded-[22px] bg-[#003c33] text-white p-10 sm:p-16 text-center shadow-xl">
          <span className="text-[#edfce9] font-mono text-xs uppercase tracking-widest mb-3 block">
            Start the Conversation
          </span>
          <h2 id="cta-heading" className="text-4xl sm:text-6xl md:text-7xl font-normal font-display text-white uppercase tracking-[-1.44px] mb-8 leading-tight">
            Ready for a Website That <br /> <span className="text-[#ffad9b]">Actually Brings In</span> <br /> New Clients?
          </h2>
          <p className="text-[#d9d9dd] text-base md:text-lg mb-10 max-w-xl mx-auto font-sans leading-relaxed">
            Book a free 20-minute strategy call. We will review your current website, show you where you can win more customers, and give you a clear plan with zero pressure.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <ProposalDialog>
              <button 
                type="button"
                className="btn-white-pill text-sm px-9 py-3.5 cursor-pointer font-medium"
                aria-label="Request a free strategy call - Free consultation"
              >
                REQUEST A FREE STRATEGY CALL
              </button>
            </ProposalDialog>
            <Link 
              href="/packages" 
              prefetch={false}
              className="text-white hover:text-[#edfce9] text-sm underline underline-offset-4 transition-colors"
              aria-label="Compare our packages - View services and pricing"
            >
              COMPARE ALL PACKAGES &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
