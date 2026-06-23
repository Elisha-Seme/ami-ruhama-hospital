import { NextResponse } from "next/server";

const TO = process.env.CONTACT_EMAIL ?? "warabamedicalcentre@gmail.com";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ ok: false, error: "Email service not configured" }, { status: 503 });
  }

  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "AMI Ruhama Website <onboarding@resend.dev>",
      to: [TO],
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "not provided"}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Failed to send" }, { status: 500 });
  }
}
