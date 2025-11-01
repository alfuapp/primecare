import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HuomioBanner from "../components/HuomioBanner";

export const metadata = {
  title: "PrimeCare",
  description: "Terveys on etusijalla – sinun hyvinvointisi on meille tärkeää.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body className="bg-[#F9FBFD] text-gray-800 font-sans antialiased">
        <Header />
        <HuomioBanner />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
