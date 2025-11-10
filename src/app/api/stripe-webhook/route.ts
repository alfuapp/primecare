import { NextResponse } from "next/server";
import Stripe from "stripe";

// Stripe must run on Node runtime (not Edge)
export const runtime = "nodejs";

// Disable automatic body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-10-29.clover",
});

export async function POST(req: Request) {
  let body: string;
  let sig: string | null;

  try {
    // Get the raw body
    body = await req.text();
    // Get the Stripe signature header
    sig = req.headers.get("stripe-signature");
    if (!sig) throw new Error("Missing Stripe signature header");

    // Verify the event
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    console.log("✅ Webhook event received:", event.type);

    // Handle success events
    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("💰 Payment succeeded for:", paymentIntent.id);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    console.error("❌ Webhook error:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
}

export async function GET() {
  return new NextResponse("Method Not Allowed", { status: 405 });
}
