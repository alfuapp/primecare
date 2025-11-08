"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SummaryContent() {
  const params = useSearchParams();
  const service = params.get("service") || "Resepti";
  const price = params.get("price") || "12";
  const email = params.get("email") || "-";
  const phone = params.get("phone") || "-";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F9FBFD] text-gray-700 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg text-center">
        <h1 className="text-3xl font-semibold text-[#0D3B66] mb-6">
          📋 Yhteenveto tilauksestasi
        </h1>

        <div className="text-left space-y-2 mb-6">
          <p><strong>Palvelu:</strong> {service}</p>
          <p><strong>Hinta:</strong> €{price}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Puhelin:</strong> {phone}</p>
        </div>

        <a
          href="/checkout"
          className="inline-block bg-[#E63946] hover:bg-[#d5303e] text-white px-6 py-3 rounded-lg font-semibold shadow transition"
        >
          Muokkaa tilausta
        </a>
      </div>
    </main>
  );
}

export default function SummaryPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-600">Ladataan yhteenveto...</div>}>
      <SummaryContent />
    </Suspense>
  );
}
