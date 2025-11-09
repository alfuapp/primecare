import { NextResponse } from "next/server";
import Stripe from "stripe";


export const runtime = "nodejs"; // ensure Node runtime for streaming body


export async function POST(req: Request) {
const sig = req.headers.get("stripe-signature");
const body = await req.text();


if (!sig) return NextResponse.json({ error: "Missing signature" }, { status: 400 });


try {
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);


switch (event.type) {
case "payment_intent.succeeded": {
const pi = event.data.object as Stripe.PaymentIntent;
// TODO: mark order as paid in DB, send internal notifications, etc.
console.log("✅ Payment succeeded:", pi.id, pi.metadata);
break;
}
case "payment_intent.payment_failed": {
const pi = event.data.object as Stripe.PaymentIntent;
console.warn("❌ Payment failed:", pi.id, pi.last_payment_error?.message);
break;
}
default:
console.log(`Unhandled event type ${event.type}`);
}


return NextResponse.json({ received: true });
} catch (err: any) {
console.error("Webhook error", err.message);
return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
}
}