"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "Palvelu";
  const price = searchParams.get("price") || "0";

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Save log first
      await fetch("/api/log-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, service, price }),
      });

      // ✅ Redirect to summary page (confirmation)
      const params = new URLSearchParams({
        service,
        price,
        email,
        phone,
      });
      window.location.href = `/summary?${params.toString()}`;
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
          {service}
        </h1>
        <p className="text-lg text-[#E63946] font-semibold mb-4">
          Hinta: {price} €
        </p>

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
          {loading ? "Siirrytään..." : "Jatka"}
        </button>
      </form>
    </main>
  );
}
