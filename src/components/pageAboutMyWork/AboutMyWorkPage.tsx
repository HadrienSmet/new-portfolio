"use client";
import { Suspense, useEffect, useRef } from "react";
import Image from "next/image";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

import { poppins } from "../../../assets/fonts";
import splashInk from "../../../public/images/ink-splash.webp";
import { ProjectsAsProps } from "../../../types/ProjectsAsProps";

import BackgroundLayout from "../BackgroundLayout";
import LoadingLayout from "../LoadingLayout";

import { Experiences, Projects, Tools } from "./sections";

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
                <Experiences />
                <Projects projects={projects} />
            </main>
        </Suspense>
    );
};

export default AboutMyWorkPage;
