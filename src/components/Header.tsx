"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md border-b border-[#D9E6F2]" // marka la scroll gareeyo
          : "bg-[#0D3B66]" // marka lagu jiro top-ka
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* ✅ Logo + Title */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="PrimeCare Logo" width={40} height={40} />
          <span
            className={`font-bold text-lg transition-colors ${
              scrolled ? "text-[#0D3B66]" : "text-white"
            }`}
          >
            PrimeCare
          </span>
        </div>

        {/* ✅ Menu Links */}
        <ul
          className={`hidden sm:flex gap-6 font-medium transition-colors ${
            scrolled ? "text-gray-700" : "text-gray-100"
          }`}
        >
          <li>
            <Link href="/" className="hover:text-[#A7C7E7]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-[#A7C7E7]">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#A7C7E7]">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#A7C7E7]">
              Contact
            </Link>
          </li>
        </ul>

        {/* ✅ Book Appointment Button */}
        <button
  onClick={() =>
    (window.location.href =
      "/checkout?service=Lääkärin%20etävastaanotto&price=43")
  }
  className="bg-[#0D3B66] hover:bg-[#0b3560] text-white font-semibold py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
>
  💬 Book Appointment
</button>

      </nav>
    </header>
  );
}
