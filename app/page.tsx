import HomePage from "@/components/pageHome/HomePage";
import { prisma } from "@/db/prisma";

export default async function Home() {
    const projects = await prisma.projects.findMany();

    return <HomePage projects={projects} />;
}
