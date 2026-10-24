import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";

const socialLinks = [
  { label: "Follow us on X (Twitter)", icon: "𝕏", href: "https://x.com/CreativeRealmUK" },
  { label: "Connect with us on LinkedIn", icon: "in", href: "https://linkedin.com/company/creative-realm-designs" },
  { label: "View our work on Behance", icon: "be", href: "https://behance.net/creativerealm" },
  { label: "See our designs on Dribbble", icon: "dr", href: "https://dribbble.com/creativerealm" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a32] bg-[#17171c] text-white py-14 sm:py-20 relative overflow-hidden" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-14 sm:mb-16">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-widest text-[#ff7759] font-mono font-medium mb-3">
              CREATIVE REALM DESIGNS
            </div>
            <h3 className="text-white font-display text-2xl sm:text-3xl font-bold mb-4 uppercase tracking-tight">
              CREATIVE <span className="text-[#ff7759]">REALM</span>
            </h3>
            <p className="text-[#93939f] text-sm leading-relaxed mb-6 max-w-sm">
              We design, build, and optimize high-converting websites for ambitious brands. Bespoke UI/UX, fast Next.js engineering, and organic Google SEO.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, icon, href }) => (
                <a 
                  key={label} 
                  href={href} 
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-9 rounded-full bg-[#22222a] border border-[#33333d] flex items-center justify-center text-white text-xs font-medium hover:border-[#ff7759] hover:text-[#ff7759] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7759]"
                >
                  <span aria-hidden="true">{icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 lg:ml-auto">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm text-[#93939f]">
              <li><Link href="/" prefetch={false} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">Home</Link></li>
              <li><Link href="/about" prefetch={false} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">About Agency</Link></li>
              <li><Link href="/services" prefetch={false} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">Services</Link></li>
              <li><Link href="/packages" prefetch={false} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">Packages & Pricing</Link></li>
              <li><Link href="/portfolio" prefetch={false} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">Case Studies</Link></li>
              <li><Link href="/contact" prefetch={false} className="hover:text-white transition-colors focus-visible:outline-none focus-visible:underline">Get in Touch</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-5">Core Capabilities</h4>
            <ul className="space-y-3 text-sm text-[#93939f]">
              <li><Link href="/services#website-design" prefetch={false} className="hover:text-white transition-colors">Bespoke Website Design</Link></li>
              <li><Link href="/services#web-development" prefetch={false} className="hover:text-white transition-colors">Next.js Web Development</Link></li>
              <li><Link href="/services#seo-services" prefetch={false} className="hover:text-white transition-colors">SEO & Google Visibility</Link></li>
              <li><Link href="/services#mobile-optimization" prefetch={false} className="hover:text-white transition-colors">Mobile Speed Optimization</Link></li>
              <li><Link href="/services#conversion-optimization" prefetch={false} className="hover:text-white transition-colors">Conversion Rate Audits</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-[#ff7759] font-mono font-medium mb-2">
              STRATEGY BRIEFING
            </div>
            <h4 className="text-white text-base font-semibold mb-2">Stay Ahead in Digital</h4>
            <p className="text-[#93939f] text-xs leading-relaxed mb-4">
              Get monthly actionable insights on website conversions, Core Web Vitals, and search rankings.
            </p>
            <NewsletterForm />
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#2a2a32] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#93939f]">
          <div className="flex flex-wrap gap-4 text-center md:text-left">
            <p suppressHydrationWarning>© {new Date().getFullYear()} Creative Realm Designs Ltd. Registered in England &amp; Wales.</p>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <p>Engineered for Speed &amp; Conversions.</p>
          </div>
          <div className="flex gap-5">
            <Link href="/contact" prefetch={false} className="hover:text-white transition-colors">Start Project</Link>
            <Link href="/packages" prefetch={false} className="hover:text-white transition-colors">Packages</Link>
            <Link href="/portfolio" prefetch={false} className="hover:text-white transition-colors">Case Studies</Link>
            <Link href="/services" prefetch={false} className="hover:text-white transition-colors">Services</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
