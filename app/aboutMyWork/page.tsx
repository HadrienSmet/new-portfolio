import Image from "next/image";
import BackgroundLayout from "@/components/BackgroundLayout";
import splashInk from "../../public/images/ink-splash.jpg";
import SectionTools from "@/components/pageAboutMyWork/SectionTools";
import { prisma } from "@/db/prisma";
import SectionProjects from "@/components/pageAboutMyWork/sectionProjects/SectionProjects";

export default async function page() {
    const projects = await prisma.projects.findMany();
    return (
        <>
            <main className="about-my-work">
                <BackgroundLayout>
                    <Image
                        height={2700}
                        width={2700}
                        alt="Splash of ink"
                        src={splashInk}
                    />
                </BackgroundLayout>
                <h1>About my work</h1>
                <SectionTools />
                <SectionProjects projects={projects} />
            </main>
        </>
    );
}

// export default page;
