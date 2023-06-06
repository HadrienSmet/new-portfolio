"use client";
import OnlineProjectsContainer from "./onlineProjects/OnlineProjectsContainer";
import StacksContainer from "./StacksContainer";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ProjectsAsProps } from "../../../../types/ProjectsAsProps";

const useWorkOnScroll = () => {
    const workRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.5,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (workRef.current) observer?.observe(workRef.current);
    }, [workRef, observer]);
    return { workRef };
};

const Work = ({ projects }: ProjectsAsProps) => {
    const { workRef } = useWorkOnScroll();
    return (
        <section id="work" className="work" ref={workRef}>
            <StacksContainer />
            <OnlineProjectsContainer projects={projects} />
        </section>
    );
};

export default Work;
