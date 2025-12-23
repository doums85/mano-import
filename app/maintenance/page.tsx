
import React from 'react';
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Maintenance en cours",
    description: "Le site est actuellement en maintenance. Nous revenons très vite.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function MaintenancePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
            <Card className="max-w-md w-full text-center shadow-lg border-none bg-white/80 backdrop-blur-sm">
                <CardHeader className="space-y-4 pb-2">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-primary"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                            />
                        </svg>
                    </div>
                    <CardTitle className="text-2xl font-bold">Maintenance en cours</CardTitle>
                    <CardDescription className="text-gray-500 text-lg">
                        Nous mettons à jour notre site pour mieux vous servir.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                    <p className="text-gray-600">
                        Le site sera bientôt de retour. En attendant, si vous êtes un professionnel, vous pouvez demander un accès dédié.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/app">
                            <Button className="w-full sm:w-auto font-medium" size="lg">
                                Demander un compte pro
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>
            <div className="mt-8 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} Mano Import. Tous droits réservés.
            </div>
        </div>
    );
}
