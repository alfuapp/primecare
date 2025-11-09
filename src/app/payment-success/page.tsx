"use client";
import { useSearchParams } from "next/navigation";

export default function PaymentSuccessPage() {
  const params = useSearchParams();
  const amount = params.get("amount");
  const email = params.get("email");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="rounded-2xl bg-white p-8 shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          ✅ Maksu onnistui!
        </h1>
        <p className="text-gray-700 mb-2">
          Kiitos maksustasi PrimeCare-palvelussa.
        </p>
        <p className="text-gray-700">
          Summasi oli <span className="font-semibold">{amount} €</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Kuitti lähetetään sähköpostiisi:{" "}
          <span className="font-medium">{email}</span>
        </p>
        <a
          href="/"
          className="inline-block mt-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
        >
          Palaa etusivulle
        </a>
      </div>
    </div>
  );
}
