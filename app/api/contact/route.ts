import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      fullName,
      companyName,
      email,
      phone,
      droneRequirement,
      message,
    } = await req.json();

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
      from: `"ZX Website" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: "New ZX-2480 Sample Request",
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Company Name:</strong> ${companyName || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Drone Requirement:</strong> ${droneRequirement || "-"}</p>
        <p><strong>Message:</strong> ${message || "-"}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Mail Error:", error);
    return Response.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
