"use client";
import { ProjectInterface } from "@/interfaces/Project";
import OnlineProjectCard from "./OnlineProjectCard";

type PropsType = {
    projects: ProjectInterface[];
};
const OnlineProjectsContainer = ({ projects }: PropsType) => {
    return (
        <div className="online-projects-division">
            <h2>My online projects</h2>
            <div className="online-projects-container">
                {projects &&
                    projects.map((project) => (
                        <OnlineProjectCard key={project.id} project={project} />
                    ))}
            </div>
        </div>
    );
};

export default OnlineProjectsContainer;
