import AboutMePage from "@/components/pageAboutMe/AboutMePage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Hadrien Smet | About me`,
        description:
            "On this page you will discover more about my soft skills and my hobbies",
        icons: [
            {
                rel: "shortcut icon",
                type: "image/x-icon",
                sizes: "48x48",
                url: "/images/favicon.ico",
            },
        ],
    };
}

export default async function page() {
    return <AboutMePage />;
}
