"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0D3B66] text-white shadow">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-wide">PrimeCare</span>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:underline">
            Etusivu
          </Link>
          <Link href="/services" className="hover:underline">
            Palvelut
          </Link>
          <Link href="/contact" className="hover:underline">
            Yhteys
          </Link>
          <span className="rounded bg-white/10 px-2 py-1 text-xs">FI</span>
        </nav>
      </div>
    </header>
  );
}
