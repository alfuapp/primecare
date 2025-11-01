import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { email, phone } = await request.json();

    if (!email || !phone) {
      return NextResponse.json(
        { error: "Email and phone are required" },
        { status: 400 }
      );
    }

    // ✅ Define file path inside project root
    const logFilePath = path.join(process.cwd(), "user_logs.json");

    // ✅ Read old logs if exist
    let logs = [];
    if (fs.existsSync(logFilePath)) {
      const fileData = fs.readFileSync(logFilePath, "utf-8");
      logs = JSON.parse(fileData);
    }

    // ✅ Add new entry
    const newLog = {
      email,
      phone,
      timestamp: new Date().toISOString(),
    };

    logs.push(newLog);

    // ✅ Save to file
    fs.writeFileSync(logFilePath, JSON.stringify(logs, null, 2));

    console.log("✅ Log saved:", newLog);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Log error:", error);
    return NextResponse.json({ error: "Failed to save log" }, { status: 500 });
  }
}
