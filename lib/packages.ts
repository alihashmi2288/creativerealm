export interface PackageTier {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  price: string;
  period: string;
  turnaround: string;
  description: string;
  idealFor: string;
  recommended: boolean;
  deliverables: string[];
  keyHighlights: {
    pages: string;
    design: string;
    code: string;
    seo: string;
    support: string;
  };
}

export interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    tooltip?: string;
    starter: string | boolean;
    growth: string | boolean;
    scale: string | boolean;
  }[];
}

export interface AddOnService {
  name: string;
  price: string;
  cadence: string;
  description: string;
  deliverables: string[];
}

export const packagesData: PackageTier[] = [
  {
    id: "starter",
    name: "Starter Showcase",
    badge: "Targeted Launch Scope",
    tagline: "High-impact visual credibility for growing ventures",
    price: "$3,200",
    period: "Fixed Investment",
    turnaround: "2 to 3 Weeks",
    description: "Tailored for startups, professional consultants, and local businesses that need an impressive, high-converting digital storefront to win trust immediately.",
    idealFor: "Businesses launching a new brand or replacing an outdated, slow WordPress template.",
    recommended: false,
    deliverables: [
      "Bespoke 5-page custom responsive design",
      "Hand-coded modern website (no slow templates)",
      "Loads in under a second on mobile & wifi",
      "Easy and natural to use on all smartphones",
      "Built-in Google SEO setup & sitemap",
      "Clean contact form that delivers leads to your inbox",
      "Domain connection & secure HTTPS setup",
      "30 Days post-launch warranty & free fixes"
    ],
    keyHighlights: {
      pages: "Up to 5 Custom Pages",
      design: "Custom Design Mockups",
      code: "Hand-Coded Fast Performance",
      seo: "Google Indexing & Search Setup",
      support: "30 Days Dedicated Support"
    }
  },
  {
    id: "growth",
    name: "Growth Engine",
    badge: "Full Agency Scope",
    tagline: "The complete website to dominate Google and get steady clients",
    price: "$5,800",
    period: "Fixed Investment",
    turnaround: "3 to 5 Weeks",
    description: "Our flagship package built for ambitious businesses ready to outrank competitors on Google, turn visitors into calls, and present a premium brand online.",
    idealFor: "Established companies looking to scale organic leads, build brand authority, and maximize conversions.",
    recommended: true,
    deliverables: [
      "Up to 10 custom-designed & hand-coded pages",
      "Full visual design mockups for your feedback & approval",
      "Loads in under a second with 98+ PageSpeed guarantee",
      "High-converting layout that guides visitors to take action",
      "Full Google SEO setup to rank for local and regional searches",
      "Google Search Console & live visitor tracking",
      "Smooth, subtle animations and interactive cards",
      "Custom lead inquiry form tailored to your sales process",
      "Complete design system with reusable layouts",
      "90 Days dedicated support & speed maintenance"
    ],
    keyHighlights: {
      pages: "Up to 10 Custom Pages",
      design: "Complete Custom Visual Design",
      code: "Under 1-Sec Load Guarantee",
      seo: "Full Google SEO Setup",
      support: "90 Days Priority Support"
    }
  },
  {
    id: "scale",
    name: "Scale & Authority",
    badge: "Enterprise Architecture",
    tagline: "Custom web applications & deep brand infrastructure",
    price: "$11,500+",
    period: "Custom Scope",
    turnaround: "6 to 8 Weeks",
    description: "An end-to-end bespoke digital solution for high-traffic enterprises, funded SaaS startups, and ambitious platforms requiring advanced integrations and headless CMS architecture.",
    idealFor: "Organizations with complex data flows, multi-language needs, or custom backend requirements.",
    recommended: false,
    deliverables: [
      "Multi-page enterprise web design & design system",
      "Headless CMS integration (Sanity, MDX, or Contentful)",
      "Custom third-party API & CRM integrations (HubSpot, Stripe)",
      "Deep programmatic SEO & internationalization setup",
      "Dynamic filtering, custom client portals, or member areas",
      "Sub-second global CDN edge caching",
      "Enterprise security hardening & WCAG AA compliance",
      "Dedicated senior creative director & lead engineer",
      "Comprehensive client team training video library",
      "6 Months ongoing SLA & priority maintenance"
    ],
    keyHighlights: {
      pages: "15+ Pages or Web Application",
      design: "Full Multi-Brand Design System",
      code: "Headless CMS & Custom API Integrations",
      seo: "Deep Programmatic & National SEO",
      support: "6 Months Priority SLA Support"
    }
  }
];

export const comparisonFeatures: ComparisonFeature[] = [
  {
    category: "Design & UX Strategy",
    features: [
      { name: "Custom Pages Included", starter: "Up to 5 Pages", growth: "Up to 10 Pages", scale: "15+ or Custom App" },
      { name: "Figma High-Fidelity Design", starter: true, growth: true, scale: true },
      { name: "Interactive Clickable Prototype", starter: "Key Flow Only", growth: "Full Interactive Prototype", scale: "Comprehensive Multi-Device" },
      { name: "Conversion Rate Optimization (CRO)", starter: "Standard Best Practices", growth: "Tailored User Flow Maps", scale: "Behavioral & Heatmap Strategy" },
      { name: "Custom Reusable Design System", starter: false, growth: true, scale: "Enterprise Tokenized Library" }
    ]
  },
  {
    category: "Engineering & Speed Performance",
    features: [
      { name: "Next.js & React Modern Framework", starter: true, growth: true, scale: true },
      { name: "Google PageSpeed Score Guarantee", starter: "95+ on Mobile & Desktop", growth: "98+ Verified on Mobile", scale: "Near-Perfect 99-100 Across All" },
      { name: "Sub-Second First Contentful Paint", starter: true, growth: true, scale: true },
      { name: "Tailwind CSS & Zero Bloat Architecture", starter: true, growth: true, scale: true },
      { name: "Custom Interactive Micro-Animations", starter: "Subtle Transitions", growth: "Fluid Scroll & Hover Effects", scale: "Complex Physics & 3D Shaders" },
      { name: "Headless CMS / Blog Integration", starter: "Add-on Available", growth: "Available as Add-on", scale: "Included (Sanity/MDX)" }
    ]
  },
  {
    category: "Google SEO & Visibility",
    features: [
      { name: "Foundational Technical SEO Audit", starter: true, growth: true, scale: true },
      { name: "JSON-LD Structured Schema Markup", starter: "Organization & Local", growth: "Comprehensive Rich Snippets", scale: "Custom Dynamic Schema" },
      { name: "Google Search Console & Sitemap Indexing", starter: true, growth: true, scale: true },
      { name: "Keyword & Heading Architecture", starter: "Core Keywords", growth: "Competitive Search Strategy", scale: "Deep Programmatic Keyword Plan" },
      { name: "Analytics & Custom Goal Tracking", starter: "Google Analytics 4", growth: "GA4 + Custom Form Conversions", scale: "Full Event Funnel Tracking" }
    ]
  },
  {
    category: "Support, IP & Guarantees",
    features: [
      { name: "100% Code & Asset Ownership", starter: true, growth: true, scale: true },
      { name: "Zero Vendor Lock-in or Hostage Fees", starter: true, growth: true, scale: true },
      { name: "Post-Launch Warranty & Bug Fixes", starter: "30 Days", growth: "90 Days", scale: "6 Months Priority SLA" },
      { name: "Dedicated Communication Channel", starter: "Email Support", growth: "Dedicated Shared Channel", scale: "Priority VIP Slack Access" },
      { name: "Client Training & Video Documentation", starter: "Standard Guide", growth: "Bespoke Loom Video Library", scale: "Live Team Workshops + Docs" }
    ]
  }
];

export const addOnServices: AddOnService[] = [
  {
    name: "Growth & Care Retainer",
    price: "$450",
    cadence: "/ month",
    description: "Proactive monthly speed optimization, security audits, framework updates, and up to 4 hours of dedicated design/content updates.",
    deliverables: ["Continuous Core Web Vitals checks", "Framework & dependency security updates", "Monthly automated offsite backups", "Up to 4 hours design/copy updates"]
  },
  {
    name: "Core Web Vitals & Speed Overhaul",
    price: "$750",
    cadence: "One-time",
    description: "Deep dive into existing slow sites to slash loading times, compress media, eliminate blocking scripts, and achieve green scores on Google Lighthouse.",
    deliverables: ["LCP, INP, and CLS performance tuning", "Image & video pipeline modernization", "CSS & JavaScript bundle tree-shaking", "Before-and-after audit benchmark report"]
  },
  {
    name: "Topical SEO & Keyword Sprint",
    price: "$1,400",
    cadence: "One-time",
    description: "Comprehensive competitive search gap analysis, high-intent buyer keyword mapping, and structured content roadmaps to dominate page 1.",
    deliverables: ["Competitor keyword gap analysis", "10 Target service page copy blueprints", "Rich snippet FAQ & service schema injection", "Google Business & indexing boost"]
  },
  {
    name: "Headless CMS & Editorial Blog",
    price: "$950",
    cadence: "One-time",
    description: "Direct integration with Sanity or MDX, giving your internal marketing team a clean dashboard to publish articles without touching code.",
    deliverables: ["Sanity Studio or MDX blog setup", "Custom editorial typography & image styles", "Social sharing OpenGraph generators", "Author bio & category tag system"]
  }
];

export const packagesFaqs = [
  {
    question: "Why are all prices in US Dollars ($) and fixed-price?",
    answer: "We work with clients across the US, UK, and worldwide. Pricing in US Dollars provides transparent, predictable benchmarks without currency volatility. Our fixed-price model means you receive a clear Scope of Work (SOW) upfront, so you never have to worry about runaway hourly billing or surprise invoices."
  },
  {
    question: "What is your milestone payment structure?",
    answer: "For standard projects, we use a 50/50 model: 50% deposit upon project kick-off to secure our design sprint calendar, and 50% upon final sign-off once the website is thoroughly tested and ready to launch. For larger enterprise engagements ($10,000+), we can break this into 40/30/30 milestones tied directly to delivery checkpoints."
  },
  {
    question: "Do I completely own the website and source code?",
    answer: "Yes, 100%. Once final payment is made, you hold full legal intellectual property ownership of the Figma UI design files, custom Next.js repository, graphic assets, and copywriting. We never charge license fees or hold your digital assets hostage."
  },
  {
    question: "Can I start with Starter Showcase and upgrade later?",
    answer: "Absolutely. We build every project using modular React component architecture in Next.js. If you start with a 5-page Starter Showcase today, we can expand your site with additional pages, a CMS, or custom web apps in the future without having to rebuild from scratch."
  },
  {
    question: "How do you guarantee a 98+ Google PageSpeed score?",
    answer: "Unlike agencies that use heavy WordPress plugins, bloated page builders (Elementor/Divi), or unoptimized templates, we write lean, semantic Next.js code. We utilize automatic image optimization (AVIF/WebP), modern server rendering, zero unneeded JavaScript, and deploy to global edge CDNs for instant worldwide delivery."
  },
  {
    question: "What is required from me before we get started?",
    answer: "Simply submit an inquiry through our contact form. We'll hop on a 20-minute strategy call to discuss your audience, competitors, and key objectives. If we are a great fit, we provide a formal project agreement and onboarding questionnaire to kick off our design phase."
  }
];
