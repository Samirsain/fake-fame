import type { Metadata, Viewport } from "next";
import { Baloo_2, Shantell_Sans } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({ variable: "--font-baloo", subsets: ["latin", "devanagari"], weight: ["500", "600", "700", "800"], display: "swap" });
const shantell = Shantell_Sans({ variable: "--font-shantell", subsets: ["latin"], weight: ["700"], display: "swap" });

export const metadata: Metadata = {
  title: "Fake or Fam — find your fake friends",
  description: "Make a 10-question quiz about yourself, share it, and see which friends actually know you.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${baloo.variable} ${shantell.variable}`}>
      <body className="flex justify-center">
        <main className="phone w-full max-w-[500px]">{children}</main>
      </body>
    </html>
  );
}
