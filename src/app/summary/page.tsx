"use client";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function SummaryPage() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "Palvelu";
  const price = searchParams.get("price") || "0";
  const email = searchParams.get("email") || "";
  const phone = searchParams.get("phone") || "";

  const handleConfirm = async () => {
    const button = document.getElementById("confirm-btn");
    if (button) button.innerHTML = "⏳ Siirretään...";
    try {
      const res = await fetch("/api/start-identification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone }),
      });

      const data = await res.json();
      if (data.redirectUrl) {
        setTimeout(() => {
          window.location.href = data.redirectUrl;
        }, 700); // small delay for animation feel
      }
    } catch (err) {
      alert("Virhe tunnistautumisessa");
      if (button) button.innerHTML = "✅ Vahvista ja siirry tunnistautumiseen";
    }
  };

  return (
    <main className="min-h-screen bg-[#F9FBFD] flex flex-col items-center justify-start pt-20 px-4 text-gray-800 overflow-hidden">
      {/* Animated Header */}
      <motion.div
        className="w-full bg-[#0D3B66] text-white py-8 text-center shadow-md"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-bold">Maksun vahvistus</h1>
        <p className="text-gray-200 mt-1">
          Tarkista alla olevat tiedot ennen tunnistautumista
        </p>
      </motion.div>

      {/* Animated Card */}
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg mt-10 text-center border border-gray-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-2xl font-bold text-[#0D3B66] mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Tilauksen yhteenveto
        </motion.h2>

        <div className="text-left space-y-3 mb-8">
          <p>
            <strong>Palvelu:</strong> {service}
          </p>
          <p>
            <strong>Hinta:</strong> {price} €
          </p>
          <p>
            <strong>Sähköposti:</strong> {email}
          </p>
          <p>
            <strong>Puhelin:</strong> {phone}
          </p>
        </div>

        <motion.button
          id="confirm-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleConfirm}
          className="bg-[#0D3B66] hover:bg-[#0b3560] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition w-full"
        >
          ✅ Vahvista ja siirry tunnistautumiseen
        </motion.button>

        <motion.a
          href="/checkout"
          className="text-[#0D3B66] hover:underline text-sm block mt-4"
          whileHover={{ scale: 1.02 }}
        >
          ← Muokkaa tietoja
        </motion.a>
      </motion.div>

      {/* Animated Footer */}
      <motion.p
        className="text-gray-500 text-sm mt-10 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        PrimeCare © {new Date().getFullYear()} – Turvallinen reseptipalvelu verkossa
      </motion.p>
    </main>
  );
}
