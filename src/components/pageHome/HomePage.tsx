import Intro from "./sectionIntro/Intro";
import About from "./sectionAbout/About";
import Contact from "./sectionContact/Contact";
import Work from "./sectionWork/Work";
import { ProjectsAsProps } from "../../../types/ProjectsAsProps";

const HomePage = ({ projects }: ProjectsAsProps) => {
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
