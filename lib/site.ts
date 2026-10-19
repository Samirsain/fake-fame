// Site-wide constants.
export const PUB = "pub-7946202742657930"; // Google AdSense publisher id (public: it is in every page's ad tag); also in public/ads.txt
export const SITE = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://fake-fame.vercel.app").replace(/\/$/, "");
export const EMAIL = "info@zenviqdigital.in"; // Zenviq Digital's public contact address (shown on zenviqdigital.in)

// Zenviq Digital's WhatsApp + call number. The prefilled message names the spot the lead came from.
export const TEL = "+919311908389";
export const wa = (from: string) =>
  `https://wa.me/${TEL.slice(1)}?text=${encodeURIComponent(`Hi Zenviq! I found you through Fake or Fam (${from}). I'd like to discuss a project.`)}`;
