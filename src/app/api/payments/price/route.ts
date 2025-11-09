import { NextResponse } from "next/server";

// Same price list as create-intent
const PRICE_MAP_EUR: Record<string, number> = {
  consultation_basic: 3900,
  prescription_renewal: 990,
  follow_up: 2500,
};

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const priceId = searchParams.get("priceId") || "prescription_renewal";

  if (!PRICE_MAP_EUR[priceId]) {
    return NextResponse.json({ error: "Invalid priceId" }, { status: 400 });
  }

  const amount = PRICE_MAP_EUR[priceId];
  return NextResponse.json({
    priceId,
    amount,
    currency: "eur",
    display: (amount / 100).toFixed(2).replace(".", ","), // e.g. 9,90
  });
}
