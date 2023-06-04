"use client";
import OnlineProjectsContainer from "./onlineProjects/OnlineProjectsContainer";
import { ProjectInterface } from "@/interfaces/Project";
import StacksContainer from "./StacksContainer";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

type WorkPropsType = {
    projects: ProjectInterface[];
};

const useWorkOnScroll = () => {
    const workRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.8,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (workRef.current) observer?.observe(workRef.current);
    }, [workRef, observer]);
    return { workRef };
};

const Work = ({ projects }: WorkPropsType) => {
    const { workRef } = useWorkOnScroll();
    return (
        <section className="work" ref={workRef}>
            <StacksContainer />
            <OnlineProjectsContainer projects={projects} />
        </section>
    );
};

export default Work;
