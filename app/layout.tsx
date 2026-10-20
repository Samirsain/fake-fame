import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Baloo_2, Shantell_Sans } from "next/font/google";
import MadeBy from "@/components/MadeBy";
import { DESCRIPTION, MOVE, PUB, SITE } from "@/lib/site";
import "./globals.css";

const baloo = Baloo_2({ variable: "--font-baloo", subsets: ["latin", "devanagari"], weight: ["500", "600", "700", "800"], display: "swap" });
const shantell = Shantell_Sans({ variable: "--font-shantell", subsets: ["latin"], weight: ["700"], display: "swap" });

export const metadata: Metadata = {
  // og:image must be an absolute URL; without this a non-Vercel host would point previews at localhost
  metadataBase: new URL(SITE),
  title: "Friendship Quiz Game & Couple Quiz — Fake or Fam",
  description: DESCRIPTION,
  openGraph: { siteName: "Fake or Fam", type: "website", locale: "en_IN" },
  other: { "google-adsense-account": `ca-${PUB}` }, // AdSense site verification
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

const LINKS = [["/guides", "Guides"], ["/for-business", "For brands"], ["/about", "About"], ["/contact", "Contact"], ["/privacy", "Privacy"], ["/terms", "Terms"]];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${baloo.variable} ${shantell.variable}`} suppressHydrationWarning>
      {/* a plain async script: next/script would add a data-nscript attribute that the AdSense tag warns about */}
      <head><script dangerouslySetInnerHTML={{ __html: MOVE }} /><script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${PUB}`} crossOrigin="anonymous" /></head>
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
