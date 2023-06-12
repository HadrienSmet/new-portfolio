import { prisma } from "@/db/prisma";
import AboutMyWorkPage from "@/components/pageAboutMyWork/AboutMyWorkPage";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Hadrien Smet | About my work`,
        description:
            "On this page you will discover all the projects I worked on and all the stacks I used",
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
    const projects = await prisma.projects.findMany();
    return <AboutMyWorkPage projects={projects} />;
}
