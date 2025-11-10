import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

// ✅ Stripe instance
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-10-29.clover",
});

// ✅ Webhook endpoint
export async function POST(req: Request) {
  const body = await req.text();
  const hdrs = headers();
  const sig = hdrs.get("stripe-signature") as string;

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET as string
    );

    console.log("✅ Webhook received:", event.type);

    // ✅ Handle specific event types
    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("💰 Payment succeeded:", paymentIntent.id);
    } else if (event.type === "payment_intent.payment_failed") {
      const failedIntent = event.data.object as Stripe.PaymentIntent;
      console.log("❌ Payment failed:", failedIntent.id);
    } else {
      console.log(`ℹ️ Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (err: any) {
    console.error("⚠️ Webhook verification failed:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }
}

// ✅ GET request (optional)
export async function GET() {
  return NextResponse.json({ message: "Method Not Allowed" }, { status: 405 });
}
