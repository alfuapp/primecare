"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function CallbackContent() {
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    const status = params.get("status");
    const email = params.get("email");
    const phone = params.get("phone");
    const service = params.get("service");
    const price = params.get("price");

    if (status === "success") {
      const query = new URLSearchParams({
        email: email || "",
        phone: phone || "",
        service: service || "",
        price: price || "",
        status: "success",
      }).toString();
      router.replace(`/success?${query}`);
    } else {
      alert("Virhe tunnistautumisessa, yritä uudelleen.");
      router.push("/checkout");
    }
  }, [params, router]);

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#F9FBFD] text-gray-700">
      <p>Tunnistautumista käsitellään...</p>
    </main>
  );
}
