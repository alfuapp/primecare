"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function SuccessPage() {
  const params = useSearchParams();
  const router = useRouter();

  const email = params.get("email");
  const phone = params.get("phone");
  const service = params.get("service");
  const price = params.get("price");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F9FBFD] text-gray-800 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-md border border-gray-200 max-w-md text-center">
        <h1 className="text-3xl font-bold text-[#0D3B66] mb-4">
          Tunnistautuminen onnistui 🎉
        </h1>
        <p className="text-gray-700 mb-6">
          Kiitos! Tietosi on vahvistettu ja maksusi on suoritettu onnistuneesti.
        </p>

        <div className="text-left text-gray-600 border-t pt-4 text-sm mb-6">
          <p><strong>Palvelu:</strong> {service}</p>
          <p><strong>Hinta:</strong> {price} €</p>
          <p><strong>Sähköposti:</strong> {email}</p>
          <p><strong>Puhelin:</strong> {phone}</p>
        </div>

        <button
          onClick={() => router.push("/")}
          className="bg-[#0D3B66] hover:bg-[#0b3560] text-white font-semibold py-2 px-6 rounded-lg shadow transition"
        >
          Palaa etusivulle
        </button>
      </div>
    </main>
  );
}
