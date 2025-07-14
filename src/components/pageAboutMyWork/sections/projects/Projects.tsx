import { useEffect, useRef } from "react";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import { ProjectsAsProps } from "../../../../../types/ProjectsAsProps";

import ProjectCard from "./ProjectCard";

const useProjectsOnScroll = () => {
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.5,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (projectsRef.current) observer?.observe(projectsRef.current);
    }, [projectsRef, observer]);
    return { projectsRef };
};

export const Projects = ({ projects }: ProjectsAsProps) => {
    const { projectsRef } = useProjectsOnScroll();
    return (
        <section id="projects" className="section-projects">
            <h2 ref={projectsRef}>
                All my projects
            </h2>
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
