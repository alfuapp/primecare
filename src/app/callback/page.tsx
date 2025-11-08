"use client";
// build trigger by Xasan 2025-11-08

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const router = useRouter();
  const [price, setPrice] = useState<number>(3900);
  const [service, setService] = useState<string>("Prescription Renewal");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const handlePay = () => {
    const query = new URLSearchParams({
      status: "success",
      email,
      phone,
      service,
      price: price ? String(price) : "",
    }).toString();
    router.push(`/callback?${query}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F9FBFD] text-gray-700 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-blue-700 mb-6 text-center">
          Checkout
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Service
            </label>
            <input
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+358 40 123 4567"
              className="mt-1 w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="text-center mt-6">
            <p className="text-lg">
              <strong>Total:</strong> €{(price / 100).toFixed(2)}
            </p>
          </div>

          <button
            onClick={handlePay}
            className="w-full mt-6 bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
          >
            Pay now
          </button>
        </div>
      </div>
    </main>
  );
}
// force redeploy callback page by Xasan
