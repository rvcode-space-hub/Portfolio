import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // 👈 must be on top

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    // 🔍 DEBUG (once check, baad me hata sakte ho)
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASS:", process.env.SMTP_PASS);
    console.log("CONTACT_EMAIL:", process.env.CONTACT_EMAIL);

    // ❗ safer Gmail SMTP config
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // 16-digit App Password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"ravitechcreation" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: subject,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    return Response.json({ message: "Message sent successfully ✅" });
  } catch (error) {
    console.error("Mail Error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email" }),
      { status: 500 }
    );
  }
}
