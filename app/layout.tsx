import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://manoimport.fr'), // Base URL for the site
  title: {
    default: "Mano Import - Saveurs et Artisanat Africains",
    template: "%s | Mano Import",
  },
  description: "Découvrez les saveurs et l'artisanat authentiques de l'Afrique. Grossiste et importateur de produits africains de qualité pour professionnels et particuliers.",
  keywords: ["import", "afrique", "alimentaire", "artisanat", "grossiste", "produits africains", "mano import"],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://manoimport.fr",
    title: "Mano Import - Saveurs et Artisanat Africains",
    description: "Grossiste et importateur de produits africains. Découvrez nos produits authentic.",
    siteName: "Mano Import",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mano Import - Saveurs et Artisanat Africains",
    description: "Grossiste et importateur de produits africains.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
