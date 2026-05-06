import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matthewshotelmarket.vercel.app"),
  title: "Matthews Hotel Market | National Hospitality Investment Sales",
  description:
    "Matthews Hotel Market — a national hospitality brokerage team specializing in select-service, full-service, and resort hotel investment sales.",
  icons: { icon: "/images/matthews-logo.jpg" },
  openGraph: {
    title: "Matthews Hotel Market | National Hospitality Investment Sales",
    description:
      "Hotel investment sales — current listings, completed transactions, and a national hospitality team.",
    images: [{ url: "/images/matthews-logo.jpg", width: 1200, height: 630, alt: "Matthews Hotel Market" }],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`no-js ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('no-js')" }} />
        {children}
      </body>
    </html>
  );
}
