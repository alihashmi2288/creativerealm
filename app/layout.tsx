import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { TooltipProvider } from "@/components/ui/tooltip";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#17171c",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Creative Realm Designs | Website Design, Development & SEO Agency",
    template: "%s | Creative Realm Designs",
  },
  description: "A premier digital agency specializing in bespoke website design, ultra-fast Next.js web development, and Google SEO growth that drives qualified business inquiries.",
  keywords: ["digital agency", "website design", "web development", "SEO agency", "Next.js development", "UI/UX design", "Core Web Vitals"],
  authors: [{ name: "Creative Realm Designs" }],
  metadataBase: new URL("https://creative-realm-designs-getj.vercel.app"),
  openGraph: {
    title: "Creative Realm Designs | Website Design, Development & SEO Agency",
    description: "A premier digital agency specializing in bespoke website design, ultra-fast Next.js web development, and Google SEO growth.",
    url: "https://creative-realm-designs-getj.vercel.app",
    siteName: "Creative Realm Designs",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Realm Designs | Website Design, Development & SEO Agency",
    description: "A premier digital agency specializing in bespoke website design, ultra-fast Next.js web development, and Google SEO growth.",
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="light" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${spaceMono.variable} font-sans bg-white text-[#212121] min-h-screen flex flex-col relative antialiased selection:bg-[#17171c] selection:text-white`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[10001] focus:px-6 focus:py-3 focus:bg-[#17171c] focus:text-white focus:font-medium focus:rounded-full">
          Skip to main content
        </a>

        {/* Cohere Announcement Bar */}
        <aside className="announcement-bar px-4 text-center z-50 text-xs text-white bg-black" aria-label="Announcement">
          <p className="flex items-center justify-center gap-2">
            <span>Now onboarding select web design &amp; Next.js engineering projects for this quarter.</span>
            <Link href="/contact" className="underline underline-offset-2 hover:text-[#ff7759] transition-colors font-medium">
              Request a proposal &rarr;
            </Link>
          </p>
        </aside>

        <CustomCursor />
        <TooltipProvider>
          <Navbar />
          <main id="main-content" className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
