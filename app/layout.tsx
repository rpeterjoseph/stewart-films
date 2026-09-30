import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans, Work_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const SITE_URL = "https://www.stewartstorytelling.com";
const SITE_TITLE = "Stewart Storytelling — Affordable Wedding Videography in Greenville, SC";
const SITE_DESCRIPTION =
  "Wedding videography in Greenville and the Upstate of South Carolina starting at $699. Call or text for flexible pricing.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Stewart Storytelling",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stewart Storytelling",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: "+18643265647",
  email: "stewartramakuri@gmail.com",
  priceRange: "$699-$999",
  areaServed: [
    "Greenville, SC",
    "Spartanburg, SC",
    "Anderson, SC",
    "Easley, SC",
    "Upstate South Carolina",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Greenville",
    addressRegion: "SC",
    addressCountry: "US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${workSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
