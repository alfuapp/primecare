"use client";
import { useState } from "react";

export default function TestStripePage() {
  const [result, setResult] = useState<string>("");

  async function handleTest() {
    try {
      const res = await fetch("/api/payments/create-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceId: "prescription_renewal",
          customerEmail: "test@example.com",
        }),
      });

      const data = await res.json();
      console.log("Stripe response:", data);

      if (!res.ok) {
        setResult(`❌ Error: ${data.error || "Unknown error"}`);
      } else {
        setResult(JSON.stringify(data, null, 2));
      }
    } catch (err: any) {
      console.error(err);
      setResult(`❌ Network error: ${err.message}`);
    }
  }

  return (
    <div
      style={{
        padding: 40,
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        🔍 Stripe Test – Create Payment Intent
      </h1>

      <button
        onClick={handleTest}
        style={{
          background: "black",
          color: "white",
          padding: "12px 24px",
          borderRadius: "10px",
          fontSize: 16,
          cursor: "pointer",
          border: "none",
        }}
      >
        Test Create Intent
      </button>

      <pre
        style={{
          marginTop: 30,
          width: "80%",
          background: "#fff",
          color: "#000",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          overflowX: "auto",
          fontSize: 14,
        }}
      >
        {result || "👉 Press the button to test Stripe PaymentIntent"}
      </pre>
    </div>
  );
}
