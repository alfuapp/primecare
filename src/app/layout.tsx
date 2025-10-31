import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "PrimeCare – Reseptin uusiminen verkossa",
  description:
    "PrimeCare tarjoaa nopean ja turvallisen tavan uusia reseptisi verkossa suomalaisilla pankkitunnuksilla.",
  openGraph: {
    title: "PrimeCare – Reseptin uusiminen verkossa",
    description:
      "Uusi reseptisi helposti ja turvallisesti PrimeCare-palvelussa.",
    url: "https://primecare.fi",
    siteName: "PrimeCare",
    images: [
      {
        url: "/doctor.png",
        width: 1200,
        height: 630,
        alt: "PrimeCare Finland",
      },
    ],
    locale: "fi_FI",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
  },
};

// ✅ Tani waa waxa uu doonayo Next.js – default export ah
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <body className="bg-[#F9FBFD] text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
