import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matthewshotelmarkets.com"),
  title: {
    default: "Matthews Hotel Markets | National Hospitality Investment Sales",
    template: "%s | Matthews Hotel Markets",
  },
  description:
    "Matthews Hotel Markets is a national hospitality brokerage team specializing in select-service, full-service, and resort hotel investment sales across the United States.",
  applicationName: "Matthews Hotel Markets",
  keywords: [
    "hotel investment sales",
    "hospitality brokerage",
    "hotel broker",
    "select-service hotel sales",
    "full-service hotel sales",
    "resort sales",
    "hotel acquisitions",
    "Matthews Real Estate Investment Services",
    "national hotel brokerage",
  ],
  authors: [{ name: "Matthews Hotel Markets" }],
  creator: "Matthews Real Estate Investment Services",
  publisher: "Matthews Real Estate Investment Services",
  alternates: { canonical: "https://matthewshotelmarkets.com/" },
  icons: {
    icon: [{ url: "/images/matthews-logo.jpg", type: "image/jpeg" }],
    apple: "/images/matthews-logo.jpg",
  },
  openGraph: {
    title: "Matthews Hotel Markets | National Hospitality Investment Sales",
    description:
      "Hotel investment sales. Current listings, completed transactions, and a national hospitality team.",
    url: "https://matthewshotelmarkets.com/",
    siteName: "Matthews Hotel Markets",
    images: [
      {
        url: "/images/matthews-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Matthews Hotel Markets",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthews Hotel Markets | National Hospitality Investment Sales",
    description:
      "National hotel brokerage. Listings, closed transactions, and a coast-to-coast team.",
    images: ["/images/matthews-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Real Estate",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://matthewshotelmarkets.com/#organization",
      name: "Matthews Hotel Markets",
      legalName: "Matthews Real Estate Investment Services",
      url: "https://matthewshotelmarkets.com/",
      logo: "https://matthewshotelmarkets.com/images/matthews-logo.jpg",
      email: "hotelteam@matthews.com",
      sameAs: ["https://www.matthews.com/"],
      areaServed: { "@type": "Country", name: "United States" },
    },
    {
      "@type": "RealEstateAgent",
      "@id": "https://matthewshotelmarkets.com/#agent",
      name: "Matthews Hotel Markets",
      url: "https://matthewshotelmarkets.com/",
      image: "https://matthewshotelmarkets.com/images/matthews-logo.jpg",
      email: "hotelteam@matthews.com",
      telephone: "+1-972-755-5200",
      parentOrganization: { "@id": "https://matthewshotelmarkets.com/#organization" },
      areaServed: { "@type": "Country", name: "United States" },
      knowsAbout: [
        "Hotel Investment Sales",
        "Hospitality Brokerage",
        "Select-Service Hotels",
        "Full-Service Hotels",
        "Resort Sales",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "5001 Spring Valley Rd, Suite 100W",
        addressLocality: "Dallas",
        addressRegion: "TX",
        postalCode: "75244",
        addressCountry: "US",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://matthewshotelmarkets.com/#website",
      url: "https://matthewshotelmarkets.com/",
      name: "Matthews Hotel Markets",
      publisher: { "@id": "https://matthewshotelmarkets.com/#organization" },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`no-js ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('no-js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
