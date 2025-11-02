import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    // ✅ Halkan ayaa la soo qaadanayaa dhammaan xogta
    const { email, phone, service, price } = await request.json();

    // ✅ Hubi in xogta muhiimka ahi ay jirto
    if (!email || !phone) {
      return NextResponse.json(
        { error: "Email and phone are required" },
        { status: 400 }
      );
    }

    // ✅ Faylka log-ka
    const logFilePath = path.join(process.cwd(), "user_logs.json");

    // ✅ Akhri xogtii hore haddii uu fayl jiro
    let logs = [];
    if (fs.existsSync(logFilePath)) {
      const fileData = fs.readFileSync(logFilePath, "utf-8");
      logs = JSON.parse(fileData);
    }

    // ✅ Diiwaangeli xogta cusub
    const newLog = {
      email,
      phone,
      service: service || "N/A",
      price: price || "0",
      timestamp: new Date().toISOString(),
    };

    logs.push(newLog);

    // ✅ Ku qor xogta faylka
    fs.writeFileSync(logFilePath, JSON.stringify(logs, null, 2));

    console.log("✅ Log saved:", newLog);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Log error:", error);
    return NextResponse.json({ error: "Failed to save log" }, { status: 500 });
  }
}
