import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const emailTemplate = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_EMAIL_USER,
      subject: emailTemplate.mailSubject,
      html: emailTemplate.html,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Failed to send email", details: error });
  }
}
