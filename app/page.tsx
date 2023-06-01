import About from "@/components/pageHome/sectionAbout/About";
import Contact from "@/components/pageHome/sectionContact/Contact";
import Intro from "@/components/pageHome/sectionIntro/Intro";
import { prisma } from "@/db/prisma";

export default async function Home() {
    const projects = await prisma.projects.findMany();

    return (
        <>
            <main className="home-page">
                <Intro />
                <About projects={projects} />
                <Contact />
            </main>
        </>
    );
}
