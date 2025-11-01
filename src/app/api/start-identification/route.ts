import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, phone } = await request.json();

    console.log("✅ User tunnistus start:", { email, phone });

    // Mock Suomi.fi redirect URL (tijaabo ahaan)
    const redirectUrl = "http://localhost:3000/success";

    return NextResponse.json({ redirectUrl });
  } catch (error) {
    console.error("❌ API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
