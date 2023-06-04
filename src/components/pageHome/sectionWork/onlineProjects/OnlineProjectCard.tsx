import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ProjectInterface } from "@/interfaces/Project";
import Image from "next/image";
import { MouseEvent, useEffect, useRef } from "react";

type PropsType = {
    project: ProjectInterface;
    handleProjectName: (event: MouseEvent) => void;
};

const useProjectCardOnScroll = () => {
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

const OnlineProjectCard = ({ project, handleProjectName }: PropsType) => {
    const { projectRef } = useProjectCardOnScroll();
    return (
        <div
            onClick={handleProjectName}
            className="online-project__card"
            id={project.name}
            ref={projectRef}
        >
            <Image
                src={`/images/${project.image_link}`}
                alt={`Illustration du projet: ${project.name}`}
                width={300}
                height={300}
            />
            <div className="online-project__card-content">
                <h3>{project.name}</h3>
                <ul>
                    {project.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OnlineProjectCard;
