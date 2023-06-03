import { ProjectInterface } from "@/interfaces/Project";
import React from "react";
import ProjectCard from "./ProjectCard";

type SectionProjectsPropsType = {
    projects: ProjectInterface[];
};

const SectionProjects = ({ projects }: SectionProjectsPropsType) => {
    return (
        <section className="section-projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {projects
                    .sort((a, b) => b.id - a.id)
                    .map((project, i) => (
                        <ProjectCard key={`project-${i}`} project={project} />
                    ))}
            </div>
        </section>
    );
};

export default SectionProjects;
