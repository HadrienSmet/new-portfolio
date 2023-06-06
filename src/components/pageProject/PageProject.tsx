"use client";
import { useRef, useEffect } from "react";
import ScreenShotsContainer from "./ScreenShotsContainer";
import PageProjectDetails from "./PageProjectDetails";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import BackgroundLayout from "../BackgroundLayout";
import Image from "next/image";
import splashInk from "../../../public/images/ink-splash.jpg";
import { ProjectAsProps } from "../../../types/ProjectAsProps";

const usePageOnScroll = () => {
    const titleRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.2,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (titleRef.current) observer?.observe(titleRef.current);
    }, [titleRef, observer]);
    return { titleRef };
};

const PageProject = ({ project }: ProjectAsProps) => {
    const { titleRef } = usePageOnScroll();
    return (
        <main className="project-page">
            <BackgroundLayout>
                <Image
                    height={2700}
                    width={2700}
                    alt="Splash of ink"
                    src={splashInk}
                />
            </BackgroundLayout>
            <h1 ref={titleRef}>{project?.name}</h1>
            <section className="project-page__content">
                {project && <ScreenShotsContainer project={project} />}
                {project && <PageProjectDetails project={project} />}
            </section>
        </main>
    );
};

export default PageProject;
