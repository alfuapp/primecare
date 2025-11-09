"use client";
import StripeProvider from "@/components/payments/StripeProvider";
import CheckoutForm from "@/components/payments/CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
        PrimeCare – Maksu
      </h1>
        <StripeProvider>
          <CheckoutForm priceId="prescription_renewal" />
        </StripeProvider>

    </div>
  );
}
