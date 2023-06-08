"use client";

import Header from "@/components/Header";
import "../src/styles/index.scss";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import NavigationContext from "@/context/NavigationContext";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hadrien Smet",
    description:
        "Hadrien Smet, fullstack junior developer enthousiast to the idea to tackle new challenges",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>Hadrien Smet</title>
                <meta
                    name="description"
                    content="Hadrien Smet, fullstack junior developer enthousiast to the idea to tackle new challenges"
                />
                <meta name="robots" content="index, follow"></meta>
            </head>
            <body suppressHydrationWarning={true}>
                <NavigationContext>
                    <Header />
                    {children}
                    <Navigation />
                    <Footer />
                    <div id="portal"></div>
                </NavigationContext>
            </body>
        </html>
    );
}
