import Header from "@/components/Header";
import "../src/styles/index.scss";
import Footer from "@/components/Footer";
import NavigationContext from "@/context/NavigationContext";
import Navigation from "@/components/Navigation";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";
import { inter } from "../assets/fonts";

export const metadata: Metadata = {
    title: "Hadrien Smet | Home",
    description:
        "Junior fullstack developer with a preference for JavaScript frameworks such as React and NextJS",
    icons: [
        {
            rel: "shortcut icon",
            type: "image/x-icon",
            sizes: "48x48",
            url: "/images/favicon.ico",
        },
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavigationContext>
                    <Header />
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                    <Navigation />
                    <Footer />
                    <div id="portal"></div>
                </NavigationContext>
            </body>
        </html>
    );
}
