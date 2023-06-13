"use client";
import { useEffect, useRef } from "react";
import BackgroundLayout from "../BackgroundLayout";
import Tools from "./Tools";
import Projects from "./sectionProjects/Projects";
import Image from "next/image";
import splashInk from "../../../public/images/ink-splash.webp";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ProjectsAsProps } from "../../../types/ProjectsAsProps";

const useTitleOnScroll = () => {
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

const AboutMyWorkPage = ({ projects }: ProjectsAsProps) => {
    const { titleRef } = useTitleOnScroll();
    return (
        <>
            <main className="about-my-work">
                <BackgroundLayout>
                    <Image
                        height={2700}
                        width={2700}
                        alt="Splash of ink"
                        src={splashInk}
                        loading="lazy"
                    />
                </BackgroundLayout>
                <h1 ref={titleRef}>About my work</h1>
                <Tools />
                <Projects projects={projects} />
            </main>
        </>
    );
};

export default AboutMyWorkPage;
