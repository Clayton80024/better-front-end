import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import GoogleAnalytics from "./components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const SITE_URL = "https://tryinstallo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Installo | Case Intake, Rebuilt.",
    template: "%s | Installo",
  },
  description:
    "Stop chasing documents. Automatically collect and structure immigration case data in minutes — not hours. Modern tools for paralegals and legal teams.",
  keywords: [
    "immigration case intake",
    "document collection",
    "case management",
    "paralegal software",
    "legal intake",
    "document automation",
    "immigration law",
    "case data extraction",
  ],
  authors: [{ name: "Installo", url: SITE_URL }],
  creator: "Installo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Installo",
    title: "Installo | Case Intake, Rebuilt.",
    description:
      "Stop chasing documents. Automatically collect and structure immigration case data in minutes — not hours.",
    images: [
      {
        url: "/og-image.png",
        width: 1536,
        height: 1024,
        alt: "Installo - Case Intake, Rebuilt.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Installo | Case Intake, Rebuilt.",
    description:
      "Stop chasing documents. Automatically collect and structure immigration case data in minutes.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#00A56E",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://tryinstallo.com/#organization",
      name: "Installo",
      url: "https://tryinstallo.com",
      logo: {
        "@type": "ImageObject",
        url: "https://tryinstallo.com/installo-logo.svg",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://tryinstallo.com/#website",
      url: "https://tryinstallo.com",
      name: "Installo",
      description:
        "Stop chasing documents. Automatically collect and structure immigration case data in minutes — not hours.",
      publisher: { "@id": "https://tryinstallo.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Installo",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Case intake software for paralegals. Upload documents, extract data, review side-by-side, and consolidate case information.",
      url: "https://app.tryinstallo.com",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://script.supademo.com/supademo.js"
          strategy="afterInteractive"
        />
        <GoogleAnalytics />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
