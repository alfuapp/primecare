"use client";
import { useState } from "react";

export default function CheckoutPage() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
  e.preventDefault();
  setLoading(true);

  try {
    // 1️⃣ — Save log first
    await fetch("/api/log-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, phone }),
    });

    // 2️⃣ — Then redirect
    const res = await fetch("/api/start-identification", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, phone }),
    });

    const data = await res.json();

    if (data.redirectUrl) {
      window.location.href = data.redirectUrl;
    } else {
      alert("Virhe: ei tunnistusosoitetta");
    }
  } catch (err) {
    console.error("Virhe tunnistautumisessa:", err);
    alert("Virhe tunnistautumisessa, yritä uudelleen.");
    setLoading(false);
  }
};


  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F9FBFD] text-gray-800 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center space-y-4"
      >
        <h1 className="text-2xl font-bold text-[#0D3B66] mb-4">
          Uusi resepti verkossa
        </h1>

        <input
          type="email"
          required
          placeholder="Sähköpostiosoite"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0D3B66]"
        />

        <input
          type="tel"
          required
          placeholder="Puhelinnumero"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#0D3B66]"
        />

        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
          <input type="checkbox" required />
          <span>Hyväksyn tietosuojaselosteen</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0D3B66] text-white py-3 rounded-lg font-semibold hover:bg-[#0b3560] transition"
        >
          {loading ? "Siirrytään..." : "Jatka tunnistautumiseen"}
        </button>
      </form>
    </main>
  );
}
