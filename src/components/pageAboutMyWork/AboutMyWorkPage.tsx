"use client";
import { Suspense, useEffect, useRef } from "react";
import BackgroundLayout from "../BackgroundLayout";
import Tools from "./Tools";
import Projects from "./sectionProjects/Projects";
import Image from "next/image";
import splashInk from "../../../public/images/ink-splash.webp";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ProjectsAsProps } from "../../../types/ProjectsAsProps";
import LoadingLayout from "../LoadingLayout";
import { poppins } from "../../../assets/fonts";

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
        <Suspense fallback={<LoadingLayout />}>
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
                <h1 className={poppins.className} ref={titleRef}>
                    About my work
                </h1>
                <Tools />
                <Projects projects={projects} />
            </main>
        </Suspense>
    );
};

export default AboutMyWorkPage;
