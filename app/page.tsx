import type { Metadata } from "next";
import Home from "@/components/Home";
import JsonLd from "@/components/JsonLd";
import { DESCRIPTION, EMAIL, SITE } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: "/" } };

// WebSite gives Google the site name for results; the app itself is a free quiz you play in the browser.
const data = {
  "@graph": [
    { "@type": "WebSite", "@id": `${SITE}/#website`, url: `${SITE}/`, name: "Fake or Fam", alternateName: ["FakeFame", "Fake Fame", "Fake or Fam friendship quiz"], inLanguage: ["en", "hi"] },
    {
      "@type": "Organization", "@id": `${SITE}/#org`, name: "Fake or Fam", url: `${SITE}/`, logo: `${SITE}/logo.png`, email: EMAIL,
      parentOrganization: { "@type": "Organization", name: "Zenviq Digital", url: "https://www.zenviqdigital.in" },
    },
    {
      "@type": "WebApplication", name: "Fake or Fam", url: `${SITE}/`, description: DESCRIPTION, applicationCategory: "GameApplication",
      operatingSystem: "Any", browserRequirements: "Requires JavaScript", inLanguage: ["en", "hi"], isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }, publisher: { "@id": `${SITE}/#org` },
    },
  ],
};

export default function Page() {
  return <><JsonLd data={data} /><Home /></>;
}
