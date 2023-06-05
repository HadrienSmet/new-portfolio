import { useRef, useEffect } from "react";
import GradientBorder from "../ui/GradientBorder";
import { ProjectAsProps } from "../../../types/ProjectAsProps";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const useContainerOnScroll = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.2,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (containerRef.current) observer?.observe(containerRef.current);
    }, [containerRef, observer]);
    return { containerRef };
};

const ButtonsContainer = ({ project }: ProjectAsProps) => {
    const { containerRef } = useContainerOnScroll();
    return (
        <div
            className="project-page__details__btn-container"
            ref={containerRef}
        >
            <GradientBorder>
                <a href={project.code_link} target="_blank">
                    See the code
                </a>
            </GradientBorder>
            {project.code_server_link && (
                <GradientBorder>
                    <a href={project.code_server_link} target="_blank">
                        See the server code
                    </a>
                </GradientBorder>
            )}
            {project.link && (
                <GradientBorder>
                    <a href={project.link} target="_blank">
                        Visit the website
                    </a>
                </GradientBorder>
            )}
        </div>
    );
};

export default ButtonsContainer;
