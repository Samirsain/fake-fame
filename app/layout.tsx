import type { Metadata, Viewport } from "next";
import { Baloo_2, Shantell_Sans } from "next/font/google";
import AdultBanner from "@/components/AdultBanner";
import MadeBy from "@/components/MadeBy";
import ThemeApplier from "@/components/ThemeApplier";
import "./globals.css";

const baloo = Baloo_2({ variable: "--font-baloo", subsets: ["latin", "devanagari"], weight: ["500", "600", "700", "800"], display: "swap" });
const shantell = Shantell_Sans({ variable: "--font-shantell", subsets: ["latin"], weight: ["700"], display: "swap" });

export const metadata: Metadata = {
  title: "Fake or Fam — find your fake friends",
  description: "Make a 10-question quiz about yourself, share it, and see which friends actually know you.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

// Runs before first paint so a saved "couples" choice never flashes the blue theme.
const themeBoot = `try{document.documentElement.dataset.theme=localStorage.getItem("mode")==="couples"?"love":"friends"}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="friends" className={`${baloo.variable} ${shantell.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeBoot }} /></head>
      <body className="flex justify-center" suppressHydrationWarning> {/* extensions (ColorZilla etc.) add attributes to <body> before React hydrates */}
        <ThemeApplier />
        <main className="phone w-full max-w-[500px]"><AdultBanner />{children}<MadeBy /></main>
      </body>
    </html>
  );
}
