import { useRef, useEffect } from "react";
import { ProjectAsProps } from "../../../types/ProjectAsProps";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const useTextOnScroll = () => {
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (textRef.current) observer?.observe(textRef.current);
    }, [textRef, observer]);
    return { textRef };
};
const useToolsOnScroll = () => {
    const toolsRef = useRef<HTMLUListElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (toolsRef.current) observer?.observe(toolsRef.current);
    }, [toolsRef, observer]);
    return { toolsRef };
};

const PageProjectDetails = ({ project }: ProjectAsProps) => {
    const { textRef } = useTextOnScroll();
    const { toolsRef } = useToolsOnScroll();
    return (
        <div className="project-page__details">
            <p ref={textRef}>{project.description}</p>
            <ul className="tools-used" ref={toolsRef}>
                {project.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                ))}
            </ul>
        </div>
    );
};

export default PageProjectDetails;
