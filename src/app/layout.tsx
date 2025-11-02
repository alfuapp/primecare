import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://primecare.fi"),
  title: {
    default: "PrimeCare – Reseptin uusiminen verkossa",
    template: "%s | PrimeCare",
  },
  description:
    "PrimeCare tarjoaa nopean ja turvallisen tavan uusia reseptisi verkossa. Tunnistaudu pankkitunnuksilla ja saat reseptin käyttöön helposti ja edullisesti.",
  keywords: [
    "PrimeCare",
    "reseptin uusiminen",
    "verkkolääkäri",
    "lääkäri online",
    "suomi tunnistus",
    "etälääkäri",
  ],
  authors: [{ name: "PrimeCare.fi" }],
  openGraph: {
    title: "PrimeCare – Reseptin uusiminen verkossa",
    description:
      "Uusi reseptisi turvallisesti ja nopeasti verkossa. PrimeCare auttaa sinua helposti ja luotettavasti.",
    url: "https://primecare.fi",
    siteName: "PrimeCare",
    locale: "fi_FI",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PrimeCare.fi – Reseptin uusiminen verkossa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeCare – Reseptin uusiminen verkossa",
    description:
      "PrimeCare tarjoaa nopean ja turvallisen tavan uusia reseptisi verkossa.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <body className="bg-[#F9FBFD] text-gray-800">
        {/* ✅ Header */}
        <Header />

        {/* ✅ Main content */}
        <main className="pt-20">{children}</main>

        {/* ✅ Footer */}
        <Footer />
      </body>
    </html>
  );
}
