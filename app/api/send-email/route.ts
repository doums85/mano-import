import { ProfessionalRequestEmail } from "@/emails/ProfessionalRequestEmail";
import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
        return NextResponse.json(
            { error: "Resend API Key is missing" },
            { status: 500 }
        );
    }

    const resend = new Resend(resendApiKey);

    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Basic validation
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: "Mano Import <onboarding@resend.dev>", // Update this with your verified domain in production
            to: ["contact@manoimport.fr"], // Sending to the site owner
            subject: `Nouvelle demande : ${subject}`,
            react: ProfessionalRequestEmail({
                name,
                email,
                subject,
                message,
            }) as React.ReactElement,
            replyTo: email,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
