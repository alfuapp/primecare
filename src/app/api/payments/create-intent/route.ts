import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
// 💶 Cents map (1€ = 100)
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

    if (!priceId || !(priceId in PRICE_MAP_EUR)) {
      return NextResponse.json({ error: "Invalid priceId" }, { status: 400 });
    }

    const amount = PRICE_MAP_EUR[priceId];
    console.log("💶 Creating PaymentIntent:", priceId, "amount:", amount, "cents");

    const customer = customerEmail
      ? await stripe.customers.create({ email: customerEmail }).catch(() => undefined)
      : undefined;

    const paymentIntent = await stripe.paymentIntents.create({
      amount, // cents
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
    return NextResponse.json({ error: err?.message ?? "Server error" }, { status: 500 });
  }
}
