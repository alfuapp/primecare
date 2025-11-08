"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const params = useSearchParams();
  const service = params.get("service") || "Resepti";
  const price = params.get("price") || "12";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F9FBFD] text-gray-700 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-semibold text-green-600 mb-4">
          ✅ Maksu onnistui!
        </h1>

        <p className="text-gray-700 mb-2">
          <strong>Palvelu:</strong> {service}
        </p>
        <p className="text-gray-700 mb-6">
          <strong>Hinta:</strong> €{price}
        </p>

        <a
          href="/"
          className="inline-block bg-[#0D3B66] hover:bg-[#0b3155] text-white px-6 py-3 rounded-lg font-semibold shadow transition"
        >
          Palaa etusivulle
        </a>
      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-gray-600">Ladataan...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
