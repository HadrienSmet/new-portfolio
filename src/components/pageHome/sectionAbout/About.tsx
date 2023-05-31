import { ProjectInterface } from "@/interfaces/Project";
import OnlineProjectsContainer from "./onlineProjects/OnlineProjectsContainer";
import DoubleImageDivision from "./doubleImage/DoubleImageDivision";

type PropsType = {
    projects: ProjectInterface[];
};

const About = ({ projects }: PropsType) => {
    console.log(projects);
    return (
        <section className="home-page__section-about">
            <OnlineProjectsContainer projects={projects} />
            <DoubleImageDivision />
        </section>
    );
};

export default About;
