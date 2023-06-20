import Intro from "./sectionIntro/Intro";
import About from "./sectionAbout/About";
import Contact from "./sectionContact/Contact";
import Work from "./sectionWork/Work";
import { ProjectsAsProps } from "../../../types/ProjectsAsProps";
import BackgroundLayout from "../BackgroundLayout";
import Image from "next/image";
import splashInk from "../../../public/images/ink-splash.webp";
import { Suspense } from "react";
import LoadingLayout from "../LoadingLayout";

const HomePage = ({ projects }: ProjectsAsProps) => {
    return (
        <Suspense fallback={<LoadingLayout />}>
            <main className="home-page">
                <BackgroundLayout>
                    <Image
                        height={2700}
                        width={2700}
                        alt="Splash of ink"
                        src={splashInk}
                        loading="lazy"
                    />
                </BackgroundLayout>
                <Intro />
                <Work projects={projects} />
                <About />
                <Contact />
            </main>
        </Suspense>
    );
};

export default HomePage;
