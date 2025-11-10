import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-10-29.clover",
});

export async function POST(req: Request) {
  const body = await req.text();

  // ✅ Qaab iswaafaqsan Next.js 16 + Turbopack
  const hdrs: any = await headers();
  const sig = hdrs.get
    ? hdrs.get("stripe-signature")
    : (await hdrs).get("stripe-signature");

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );

    console.log("✅ Webhook received:", event.type);

    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("💰 Payment succeeded:", paymentIntent.id);
    } else {
      console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    console.error("⚠️ Webhook verification failed:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
