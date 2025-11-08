"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function SuccessContent() {
  const params = useSearchParams();
  const router = useRouter();

  const email = params.get("email") || "";
  const phone = params.get("phone") || "";
  const service = params.get("service") || "";
  const price = params.get("price") || "";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F9FBFD] text-gray-700 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-green-600 mb-4">
          ✅ Payment Successful
        </h1>

        <p className="text-gray-600 mb-2">
          <strong>Service:</strong> {service}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Email:</strong> {email}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Phone:</strong> {phone}
        </p>
        <p className="text-gray-800 font-medium mt-4">
          Total Paid: €{(Number(price) / 100).toFixed(2)}
        </p>

        <button
          onClick={() => router.push("/")}
          className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
    </main>
  );
}
