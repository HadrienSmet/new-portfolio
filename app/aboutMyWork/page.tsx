import { prisma } from "@/db/prisma";
import AboutMyWorkPage from "@/components/pageAboutMyWork/AboutMyWorkPage";

export default async function page() {
    const projects = await prisma.projects.findMany();
    return <AboutMyWorkPage projects={projects} />;
}
