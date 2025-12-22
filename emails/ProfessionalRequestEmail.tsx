import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";
import * as React from "react";

interface ProfessionalRequestEmailProps {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const ProfessionalRequestEmail = ({
    name,
    email,
    subject,
    message,
}: ProfessionalRequestEmailProps) => {
    const previewText = `Nouvelle demande de compte professionnel de ${name}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans px-2">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px]">
                            {/* Logo Placeholder - simplified circle */}
                            <div className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-[10px] font-bold text-center leading-none text-black">
                                    MANO<br />IMPORT
                                </span>
                            </div>
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Demande de Compte Pro
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Bonjour,
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Une nouvelle demande de compte professionnel (ou contact) a été reçue via le site web.
                        </Text>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            <strong>Nom :</strong> {name}
                        </Text>
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            <strong>Email :</strong> {email}
                        </Text>
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            <strong>Objet / Entreprise :</strong> {subject}
                        </Text>
                        <Text className="text-[#666666] text-[12px] leading-[24px]">
                            <strong>Message :</strong>
                        </Text>
                        <Container className="bg-[#f9f9f9] p-4 rounded border border-[#eaeaea]">
                            <Text className="text-black text-[14px] leading-[24px] m-0 whitespace-pre-wrap">
                                {message}
                            </Text>
                        </Container>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px] text-center">
                            Mano Import - Espace Professionnel
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ProfessionalRequestEmail;
