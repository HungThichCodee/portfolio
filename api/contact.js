import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  if (!process.env.EMAIL_USERNAME || !process.env.EMAIL_PASSWORD) {
    console.error("Missing EMAIL_USERNAME or EMAIL_PASSWORD env vars");
    return res.status(500).json({ error: "Email service not configured." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USERNAME}>`,
      to: process.env.EMAIL_USERNAME,
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0284c7;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e4e4e7;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
          <hr style="border: 1px solid #e4e4e7; margin-top: 24px;" />
          <p style="color: #71717a; font-size: 12px;">Sent from your portfolio contact form</p>
        </div>
      `,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (err) {
    console.error("Failed to send email:", err);
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
}
