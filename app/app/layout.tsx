import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Espace Professionnel',
    description: 'Connectez-vous ou demandez un accès à votre espace professionnel Mano Import. Commandes en ligne, facturation et suivi pour les pros.',
    openGraph: {
        title: 'Espace Professionnel | Mano Import',
        description: 'Accédez à votre espace professionnel pour vos commandes et factures.',
    },
};

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
