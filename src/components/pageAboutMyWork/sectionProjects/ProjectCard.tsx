import { useEffect, useRef } from "react";
import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ProjectAsProps } from "../../../../types/ProjectAsProps";

const useProjectsOnScroll = () => {
    const projectRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (projectRef.current) observer?.observe(projectRef.current);
    }, [projectRef, observer]);
    return { projectRef };
};

const ProjectCard = ({ project }: ProjectAsProps) => {
    const { projectRef } = useProjectsOnScroll();
    return (
        <div className="project-card" ref={projectRef}>
            <Image
                src={`/images/${project.image_link}`}
                alt={`Illustration du projet: ${project.name}`}
                width={300}
                height={300}
            />
            <div className="project-card__content">
                <h3>{project.name}</h3>
                <ul>
                    {project.tools.map((tool, i) => (
                        <li key={`tool-${i}`}>{tool}</li>
                    ))}
                </ul>
                <a href={`/project/${project.id}`}>more</a>
            </div>
        </div>
    );
};

export default ProjectCard;
