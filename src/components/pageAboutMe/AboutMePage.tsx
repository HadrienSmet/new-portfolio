"use client";
import Image from "next/image";
import splashInk from "../../../public/images/ink-splash.jpg";
import BackgroundLayout from "@/components/BackgroundLayout";
import FirstSection from "@/components/pageAboutMe/firstSection/FirstSection";
import SecondSection from "@/components/pageAboutMe/secondSection/SecondSection";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const useAboutMePage = () => {
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

const AboutMePage = () => {
    const { titleRef } = useAboutMePage();
    return (
        <main className="about-me">
            <BackgroundLayout>
                <Image
                    height={2700}
                    width={2700}
                    alt="Splash of ink"
                    src={splashInk}
                />
            </BackgroundLayout>
            <h1 ref={titleRef}>About me</h1>
            <FirstSection />
            <SecondSection />
        </main>
    );
};

export default AboutMePage;