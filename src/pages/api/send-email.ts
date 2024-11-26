import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Create a transporter using your SMTP server details
    const transporter = nodemailer.createTransport({
      host: `${process.env.SMTP_HOST}`,
      port: parseInt(`${process.env.SMTP_PORT}`, 10),
      secure: true, // Use SSL (port 465)
      auth: {
        user: `${process.env.SMTP_USER}`,
        pass: `${process.env.SMTP_PASSWORD}`,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `${process.env.SMTP_USER}`,
      to: `${process.env.SMTP_USER}`,
      subject: `Contact Form Submission from ${name}`,
      text: `You have a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email. Please try again later." });
  }
}
