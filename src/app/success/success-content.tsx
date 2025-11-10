"use client";
import { useSearchParams } from "next/navigation";

export default function SuccessContent() {
  const params = useSearchParams();
  const service = params.get("service");
  const price = params.get("price");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4 py-10">
      <h1 className="text-3xl font-bold text-[#0D3B66] mb-4">✅ Maksu onnistui!</h1>
      <p className="text-gray-700 text-lg mb-2">
        Palvelu: <strong>{service}</strong>
      </p>
      <p className="text-gray-700 text-lg mb-6">
        Hinta: <strong>{price} €</strong>
      </p>
      <a
        href="/"
        className="bg-[#0D3B66] hover:bg-[#0b3155] text-white px-6 py-3 rounded-lg font-semibold shadow"
      >
        Palaa etusivulle
      </a>
    </div>
  );
}
