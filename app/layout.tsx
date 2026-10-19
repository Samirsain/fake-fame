import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Baloo_2, Shantell_Sans } from "next/font/google";
import MadeBy from "@/components/MadeBy";
import { PUB } from "@/lib/site";
import "./globals.css";

const baloo = Baloo_2({ variable: "--font-baloo", subsets: ["latin", "devanagari"], weight: ["500", "600", "700", "800"], display: "swap" });
const shantell = Shantell_Sans({ variable: "--font-shantell", subsets: ["latin"], weight: ["700"], display: "swap" });

export const metadata: Metadata = {
  // og:image must be an absolute URL; without this a non-Vercel host would point previews at localhost
  ...(process.env.NEXT_PUBLIC_SITE_URL && { metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL) }),
  title: "Fake or Fam — friendship quiz: find your fake friends",
  description: "Make a free 10-question friendship quiz about yourself, share the link on WhatsApp or Instagram, and see which friends actually know you. English, Hindi and Hinglish.",
  other: { "google-adsense-account": `ca-${PUB}` }, // AdSense site verification
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

const LINKS = [["/guides", "Guides"], ["/for-business", "For brands"], ["/about", "About"], ["/contact", "Contact"], ["/privacy", "Privacy"], ["/terms", "Terms"]];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${baloo.variable} ${shantell.variable}`} suppressHydrationWarning>
      {/* a plain async script: next/script would add a data-nscript attribute that the AdSense tag warns about */}
      <head><script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${PUB}`} crossOrigin="anonymous" /></head>
      <body className="flex justify-center" suppressHydrationWarning> {/* extensions (ColorZilla etc.) add attributes to <body> before React hydrates */}
        <main className="phone w-full max-w-[500px]">
          {children}
          <nav aria-label="Site" className="sitelinks">{LINKS.map(([h, l]) => <Link key={h} href={h}>{l}</Link>)}</nav>
          <MadeBy />
        </main>
      </body>
    </html>
  );
}
