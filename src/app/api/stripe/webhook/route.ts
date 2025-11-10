// src/app/api/stripe/webhook/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const sig = req.headers.get("stripe-signature")!;
    const body = await req.text();

    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "payment_intent.succeeded") {
      console.log("✅ Payment succeeded:", event.data.object);
    } else if (event.type === "payment_intent.payment_failed") {
      console.log("❌ Payment failed:", event.data.object);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("❗️Webhook error:", err.message);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
