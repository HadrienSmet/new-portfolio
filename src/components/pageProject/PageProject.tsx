"use client";
import { useRef, useEffect } from "react";
import ScreenShotsContainer from "./ScreenShotsContainer";
import PageProjectDetails from "./PageProjectDetails";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import BackgroundLayout from "../BackgroundLayout";
import Image from "next/image";
import splashInk from "../../../public/images/ink-splash.webp";
import { ProjectAsProps } from "../../../types/ProjectAsProps";
import { ProjectInterface } from "@/interfaces/Project";
import ButtonsContainer from "./ButtonsContainer";

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
const handleTitle = (project: ProjectInterface) => {
    let mainTitle, detailsTitle;
    if (project.name.includes(",")) {
        const titleArr = project.name.split(",");
        mainTitle = titleArr[0];
        detailsTitle = titleArr[1];
    } else {
        const titleArr = project.name.split(" - ");
        mainTitle = titleArr[0];
        detailsTitle = titleArr[1];
    }
    return { mainTitle, detailsTitle };
};
const PageProject = ({ project }: ProjectAsProps) => {
    const { titleRef } = usePageOnScroll();
    const { mainTitle, detailsTitle } = handleTitle(project);
    // if (project.id === undefined) throw Error("This project does not exist");
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
            <h1 ref={titleRef}>
                {mainTitle} <br />
                <span>{detailsTitle}</span>
            </h1>
            <section className="project-page__content">
                {project && <ScreenShotsContainer project={project} />}
                {project && <PageProjectDetails project={project} />}
            </section>
            <ButtonsContainer project={project} />
        </main>
    );
};

export default PageProject;
