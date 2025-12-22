
"use client";

import Image from "next/image";
import logoData from "../../public/logo.jpg";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, ShoppingBag, FileText, CheckCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

import { motion, Variants } from "framer-motion";

export default function ProfessionalRequestPage() {
    // ... items ...
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert('Une erreur est survenue. Veuillez réessayer.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Une erreur est survenue. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="max-w-md w-full text-center p-8 shadow-xl border-none">
                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                            <motion.svg
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="w-8 h-8 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </motion.svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Demande Envoyée !</h2>
                        <p className="text-gray-600 mb-6 font-medium">
                            Merci d&apos;avoir contacté l&apos;équipe Mano Import. <br />
                            Nous examinerons votre demande de compte professionnel et vous répondrons dans les plus brefs délais.
                        </p>
                        <Button
                            onClick={() => setSubmitted(false)}
                            className="bg-[#B91C1C] hover:bg-[#991b1b] text-white rounded-full px-8"
                        >
                            Retour
                        </Button>
                    </Card>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50/50 font-sans">
            {/* Header Placeholder - simplified */}
            <header className="bg-white py-4 px-6 md:px-12 shadow-sm flex items-center justify-between sticky top-0 z-10">
                <div className="flex items-center space-x-4">
                    {/* Logo Placeholder */}
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <Image
                            src={logoData}
                            alt="Mano Import Logo"
                            fill
                            className="object-cover"
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div className="text-sm text-gray-500 font-medium">Espace Professionnel</div>
            </header>

            <main className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header Section */}
                    <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto mb-16 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                            Votre Espace <span className="text-[#B91C1C]">Professionnel</span>
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Accédez à une plateforme dédiée pour simplifier vos approvisionnements. Gérez vos commandes et vos factures en toute simplicité.
                        </p>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full justify-center">
                                    <div className="w-12 h-12 rounded-full bg-red-50 text-[#B91C1C] flex items-center justify-center">
                                        <ShoppingBag className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Commandes en ligne</h3>
                                        <p className="text-gray-500 text-sm">Accédez à notre catalogue complet et passez vos commandes 24/7.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full justify-center">
                                    <div className="w-12 h-12 rounded-full bg-red-50 text-[#B91C1C] flex items-center justify-center">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Facturation simplifiée</h3>
                                        <p className="text-gray-500 text-sm">Retrouvez et téléchargez vos factures instantanément.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={itemVariants} whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300 h-full">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4 h-full justify-center">
                                    <div className="w-12 h-12 rounded-full bg-red-50 text-[#B91C1C] flex items-center justify-center">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Suivi en temps réel</h3>
                                        <p className="text-gray-500 text-sm">Suivez l&apos;état de vos commandes et livraisons.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                        {/* Left Column: Contact Info */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contactez-nous</h2>
                                <p className="text-gray-600">
                                    Une question ? Besoin d&apos;aide ? Notre équipe est à votre disposition.
                                </p>
                            </div>

                            {/* Contact Info Cards */}
                            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300">
                                    <CardContent className="flex items-center p-6 space-x-6">
                                        <div className="w-12 h-12 rounded-full border-2 border-[#B91C1C] text-[#B91C1C] flex items-center justify-center shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-gray-800">Email</p>
                                            <p className="text-gray-500 text-sm mt-1">
                                                contact@manoimport.fr
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300">
                                    <CardContent className="flex items-center p-6 space-x-6">
                                        <div className="w-12 h-12 rounded-full border-2 border-[#B91C1C] text-[#B91C1C] flex items-center justify-center shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-gray-800">Téléphone</p>
                                            <p className="text-gray-500 text-sm mt-1">
                                                09 82 66 44 25<br />
                                                07 85 01 33 84<br />
                                                06 86 05 01 19
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="border-none shadow-sm hover:shadow-md transition-all duration-300">
                                    <CardContent className="flex items-center p-6 space-x-6">
                                        <div className="w-12 h-12 rounded-full border-2 border-[#B91C1C] text-[#B91C1C] flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div className="text-left">
                                            <p className="font-bold text-gray-800">Adresse</p>
                                            <p className="text-gray-500 text-sm mt-1">
                                                16 de Rouen<br />
                                                78440 Porcheville
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div variants={itemVariants}>
                            <Card className="border-none shadow-lg h-full">
                                <CardContent className="p-8 md:p-12">
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Demander vos accès</h2>
                                        <p className="text-gray-500 text-sm">
                                            Vous êtes un professionnel ? Remplissez ce formulaire pour demander la création de votre compte et accéder à nos tarifs préférentiels.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name" className="sr-only">Nom complet</Label>
                                                <Input id="name" name="name" placeholder="Nom complet" className="h-12 bg-gray-50 border-gray-200 focus:border-[#B91C1C] focus:ring-[#B91C1C]" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email" className="sr-only">Email</Label>
                                                <Input id="email" name="email" type="email" placeholder="Email professionnel" className="h-12 bg-gray-50 border-gray-200 focus:border-[#B91C1C] focus:ring-[#B91C1C]" required />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="subject" className="sr-only">Objet</Label>
                                            <Input id="subject" name="subject" placeholder="Nom de votre entreprise / SIRET" className="h-12 bg-gray-50 border-gray-200 focus:border-[#B91C1C] focus:ring-[#B91C1C]" required />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message" className="sr-only">Message</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Décrivez votre activité et vos besoins..."
                                                className="min-h-[200px] bg-gray-50 border-gray-200 focus:border-[#B91C1C] focus:ring-[#B91C1C] resize-none"
                                                required
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <Button
                                                type="submit"
                                                disabled={loading}
                                                className="w-full md:w-auto bg-[#B91C1C] hover:bg-[#991b1b] text-white font-bold py-6 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {loading ? 'Envoi en cours...' : 'Envoyer la demande'}
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-100 pt-16 pb-8 mt-20 text-gray-600 font-sans">
                {/* ... footer content (keeping it static as animations usually prioritized for fold/main content) ... */}
                {/* Actually let's include footer in the same file as before but untouched for animations to save tokens/complexity unless requested */}
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="flex items-center space-x-2">
                                {/* Logo Placeholder - simplified circle */}
                                <div className="relative w-24 h-24 flex items-center justify-center">
                                    <Image
                                        src={logoData}
                                        alt="Mano Import Logo"
                                        width={96}
                                        height={96}
                                        className="object-contain"
                                        placeholder="blur"
                                    />
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed max-w-sm">
                                Nous faisons découvrir au monde entier les saveurs et l&apos;artisanat authentiques de l&apos;Afrique depuis 2010.
                            </p>
                            <div className="pt-2 text-sm font-medium text-black">
                                <p className="flex flex-wrap items-center gap-2">
                                    <span>0982664425 | 0785013384 | 0686050119</span>
                                    <span className="text-gray-400">or</span>
                                    <span>contact@manoimport.fr</span>
                                </p>
                                <p className="mt-1">16 de rouen 78440 procheville</p>
                            </div>
                        </div>

                        {/* Columns - "Helps" equivalent (Aide) */}
                        <div>
                            <h4 className="font-bold text-black mb-6">Aide</h4>
                            <ul className="space-y-4 text-sm">
                                <li><span className="cursor-not-allowed hover:text-black transition-colors">Contact</span></li>
                                <li><span className="cursor-not-allowed hover:text-black transition-colors">FAQs</span></li>
                                <li><span className="cursor-not-allowed hover:text-black transition-colors">Conditions Générales</span></li>
                                <li><span className="cursor-not-allowed hover:text-black transition-colors">Politique de Confidentialité</span></li>
                            </ul>
                        </div>

                        {/* Columns - "Proxy" equivalent */}
                        <div>
                            <h4 className="font-bold text-black mb-6">Proxy</h4>
                            <ul className="space-y-4 text-sm">
                                <li><span className="cursor-not-allowed hover:text-black transition-colors">À propos</span></li>
                                <li><span className="cursor-not-allowed hover:text-black transition-colors">Boutique</span></li>
                                <li><span className="cursor-not-allowed hover:text-black transition-colors">Produit</span></li>
                                <li><span className="cursor-not-allowed hover:text-black transition-colors">Suivre la commande</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
                        <p>Mano Import © {new Date().getFullYear()}. Tous droits réservés</p>
                        <div className="flex items-center space-x-6">
                            {/* Social Icons */}
                            <div className="w-8 h-8 rounded-full bg-[#B91C1C] flex items-center justify-center text-white cursor-pointer hover:bg-[#991b1b] transition-colors">
                                <Facebook className="w-4 h-4" />
                            </div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 cursor-pointer hover:text-[#B91C1C] transition-colors">
                                <Twitter className="w-4 h-4" />
                            </div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 cursor-pointer hover:text-[#B91C1C] transition-colors">
                                <Instagram className="w-4 h-4" />
                            </div>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 cursor-pointer hover:text-[#B91C1C] transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    );
}
