"use client";
import { useState, MouseEvent, useRef, useEffect } from "react";
import OnlineProjectCard from "./OnlineProjectCard";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import GradientBorder from "@/components/ui/GradientBorder";
import { ProjectsAsProps } from "../../../../../types/ProjectsAsProps";
import { inter, poppins } from "../../../../../assets/fonts";

const useOnlineProjectsDetails = () => {
    const [projectName, setProjectName] = useState<string | null>(null);
    const handleProjectName = (e: MouseEvent) => {
        const target = e.target as Element;
        setProjectName(target.id);
    };
    return {
        projectName,
        handleProjectName,
    };
};

const useProjectsOnScroll = () => {
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (projectsRef.current) observer?.observe(projectsRef.current);
    }, [projectsRef, observer]);
    return { projectsRef };
};

const OnlineProjectsContainer = ({ projects }: ProjectsAsProps) => {
    const { projectName, handleProjectName } = useOnlineProjectsDetails();
    const { projectsRef } = useProjectsOnScroll();
    return (
        <div ref={projectsRef} className="online-projects-division">
            <h2 className={poppins.className}>My online projects</h2>
            <div className="online-projects-container">
                {projects &&
                    projects
                        .filter((project) => project.link !== undefined)
                        .sort((a, b) => b.id - a.id)
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
                            <GradientBorder>
                                <a
                                    href={project.link!}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={poppins.className}
                                >
                                    See the website
                                </a>
                            </GradientBorder>
                        </div>
                    ))}
            {projectName === null && (
                <em id="start-info" className={inter.className}>
                    Click on a card to learn more about the site and to display
                    a link
                </em>
            )}
        </div>
    );
};

export default OnlineProjectsContainer;
