"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Reseptin uusiminen");
  const [price] = useState(1200);

  const handlePay = () => {
    router.push(`/callback?status=success&email=${email}&phone=${phone}&service=${service}&price=${price}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F9FBFD] text-gray-700 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-blue-700 mb-6">Checkout</h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <p className="text-lg">
            <strong>Total:</strong> €{(price / 100).toFixed(2)}
          </p>
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
