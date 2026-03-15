import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  if (!email || !phone) {
    return NextResponse.json({ error: "Email and phone are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.CONTACT_TO,
    subject: "Portfolio Contact",
    text: `Name: ${name || "N/A"}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
  });

  console.log("HOST:", process.env.SMTP_HOST);

  return NextResponse.json({ success: true });
}
