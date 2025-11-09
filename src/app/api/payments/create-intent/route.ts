import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe SDK
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
});

// 💶 Price map in cents (1 € = 100 cents)
const PRICE_MAP_EUR: Record<string, number> = {
  consultation_basic: 3900,   // €39.00
  prescription_renewal: 990,  // €9.90
  follow_up: 2500,            // €25.00
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { priceId, customerEmail } = body as {
      priceId: keyof typeof PRICE_MAP_EUR;
      customerEmail?: string;
    };

    // ✅ Validate
    if (!priceId || !(priceId in PRICE_MAP_EUR)) {
      return NextResponse.json({ error: "Invalid priceId" }, { status: 400 });
    }

    const amount = PRICE_MAP_EUR[priceId];

    // Debug logs to confirm correct value
    console.log("💶 Creating PaymentIntent:", priceId, "amount:", amount, "cents");

    // Optional: create/reuse a Customer for receipts
    const customer = customerEmail
      ? await stripe.customers
          .create({ email: customerEmail })
          .catch(() => undefined)
      : undefined;

    // ✅ Create the PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // integer in cents (e.g. 990 = €9.90)
      currency: "eur",
      automatic_payment_methods: { enabled: true },
      receipt_email: customerEmail,
      customer: customer?.id,
      metadata: { priceId, project: "primecare" },
    });

    console.log("✅ PaymentIntent created:", paymentIntent.id, "Amount:", paymentIntent.amount);

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err: any) {
    console.error("❌ create-intent error", err);
    return NextResponse.json(
      { error: err?.message ?? "Server error" },
      { status: 500 }
    );
  }
}
