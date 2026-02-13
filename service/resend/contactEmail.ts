"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // După ce verifici domeniul, poți pune office@fasonsalon.ro
      to: ["office@fasonsalon.ro"], // Email-ul unde vrei să primești mesajele
      subject: `Mesaj Nou: ${subject}`,
      replyTo: email,
      text: `Nume: ${name}\nEmail: ${email}\nSubiect: ${subject}\n\nMesaj:\n${message}`,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
}
