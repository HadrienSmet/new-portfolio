"use client";
import { useState, useEffect, MouseEvent } from "react";
import { ProjectInterface } from "@/interfaces/Project";
import OnlineProjectCard from "./OnlineProjectCard";

type PropsType = {
    projects: ProjectInterface[];
};
const OnlineProjectsContainer = ({ projects }: PropsType) => {
    const [projectName, setProjectName] = useState<string | null>(null);
    const handleProjectName = (e: MouseEvent) => {
        const target = e.target as Element;
        setProjectName(target.id);
    };
    useEffect(() => {
        console.log(projectName);
    }, [projectName]);
    return (
        <div className="online-projects-division">
            <h2>My online projects</h2>
            <div className="online-projects-container">
                {projects &&
                    projects
                        .filter((project) => project.link !== null)
                        .map((project) => (
                            <OnlineProjectCard
                                key={project.id}
                                project={project}
                                handleProjectName={handleProjectName}
                            />
                        ))}
            </div>
            {projectName &&
                projects
                    .filter((project) => project.name === projectName)
                    .map((project) => (
                        <div
                            key={project.name}
                            className="online-project__more-details"
                        >
                            <p>{project.description}</p>
                            <a
                                href={project.link!}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                See the website
                            </a>
                        </div>
                    ))}
        </div>
    );
};

export default OnlineProjectsContainer;
