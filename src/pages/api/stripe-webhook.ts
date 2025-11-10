import { buffer } from "micro";
import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";

// ✅ Disable automatic JSON parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-10-29.clover",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const sig = req.headers["stripe-signature"] as string;
    if (!sig) throw new Error("Missing stripe-signature header");

    const buf = await buffer(req); // 👈 This keeps raw body intact
    const event = stripe.webhooks.constructEvent(
      buf.toString(),
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    console.log("✅ Verified event:", event.type);

    if (event.type === "payment_intent.succeeded") {
      const paymentIntent = event.data.object as Stripe.PaymentIntent;
      console.log("💰 Payment succeeded:", paymentIntent.id);
    }

    return res.status(200).json({ received: true });
  } catch (err: any) {
    console.error("❌ Webhook verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
}
