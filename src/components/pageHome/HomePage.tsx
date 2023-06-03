import Intro from "./sectionIntro/Intro";
import About from "./sectionAbout/About";
import Contact from "./sectionContact/Contact";
import Work from "./sectionWork/Work";
import { ProjectInterface } from "@/interfaces/Project";

type HomePropsType = {
    projects: ProjectInterface[];
};

const HomePage = ({ projects }: HomePropsType) => {
    return (
        <main className="home-page">
            <Intro />
            <Work projects={projects} />
            <About />
            <Contact />
        </main>
    );
};

export default HomePage;
