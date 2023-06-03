import OnlineProjectsContainer from "./onlineProjects/OnlineProjectsContainer";
import { ProjectInterface } from "@/interfaces/Project";
import StacksContainer from "./StacksContainer";

type WorkPropsType = {
    projects: ProjectInterface[];
};

const Work = ({ projects }: WorkPropsType) => {
    return (
        <section className="work">
            <StacksContainer />
            <OnlineProjectsContainer projects={projects} />
        </section>
    );
};

export default Work;
