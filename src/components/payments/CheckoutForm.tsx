"use client";
import React, { useEffect, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#1a1a1a",
      "::placeholder": { color: "#888" },
    },
    invalid: { color: "#e53e3e" },
  },
  hidePostalCode: false,
} as const;

export default function CheckoutForm({
  priceId = "prescription_renewal",
}: {
  priceId?: "consultation_basic" | "prescription_renewal" | "follow_up";
}) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "succeeded" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [label, setLabel] = useState("Maksa");

  // 🔹 Load price from backend
  useEffect(() => {
    async function fetchPrice() {
      const res = await fetch(`/api/payments/price?priceId=${priceId}`);
      const data = await res.json();
      if (res.ok) {
        setAmount(data.amount);
        setLabel(`Maksa ${data.display} €`);
      }
    }
    fetchPrice();
  }, [priceId]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setStatus("loading");
    setMessage(null);

    try {
      const res = await fetch("/api/payments/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, customerEmail: email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Server error");

      const clientSecret = data.clientSecret as string;
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("Card element not found");

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement, billing_details: { email } },
      });

      if (error) {
        setStatus("error");
        setMessage(error.message || "Maksu epäonnistui.");
        return;
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        setStatus("succeeded");
        setMessage("✅ Maksu onnistui! Kuitti lähetetään sähköpostiisi.");

        setTimeout(() => {
          router.push(`/payment-success?amount=${(amount / 100).toFixed(2)}&email=${encodeURIComponent(email)}`);
        }, 2000);
      } else {
        setStatus("error");
        setMessage("Maksu ei onnistunut. Yritä uudelleen.");
      }
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message ?? "Virhe maksussa");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-5 rounded-2xl bg-white border border-gray-200 p-8 shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        💳 PrimeCare – Korttimaksu
      </h2>

      <label className="block text-sm text-gray-700">Sähköposti kuittia varten</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="w-full rounded-xl border border-gray-300 px-3 py-2 text-gray-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-400 outline-none"
      />

      <div className="rounded-xl border border-gray-300 bg-gray-50 p-3">
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>

      {message && (
        <p className={`text-center text-sm ${status === "error" ? "text-red-600" : "text-green-600"}`}>
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-4 py-3 disabled:opacity-50"
      >
        {status === "loading" ? "Käsitellään…" : label}
      </button>

      <p className="text-xs text-center text-gray-500">
        Kortit: Visa, Mastercard, AMEX. Maksu turvataan Stripe-palvelulla.
      </p>
    </form>
  );
}
