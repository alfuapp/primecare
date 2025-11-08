"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Reseptin uusiminen");
  const [price] = useState(12);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/summary?service=${encodeURIComponent(service)}&price=${price}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}`
    );
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F9FBFD] text-gray-800 px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#0D3B66] mb-6 text-center">
          🧾 Täytä tietosi
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Palvelu</label>
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Sähköposti</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Puhelin</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-[#0D3B66] hover:bg-[#0b3155] text-white font-semibold py-3 rounded-md mt-4"
          >
            Jatka yhteenvetoon →
          </motion.button>
        </form>
      </div>
    </main>
  );
}
