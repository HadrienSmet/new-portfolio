"use client";
import Image from "next/image";
import splashInk from "../../../public/images/ink-splash.webp";
import BackgroundLayout from "@/components/BackgroundLayout";
import FirstSection from "@/components/pageAboutMe/firstSection/FirstSection";
import SecondSection from "@/components/pageAboutMe/secondSection/SecondSection";
import { Suspense, useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import LoadingLayout from "../LoadingLayout";
import { poppins } from "../../../assets/fonts";

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
        <Suspense fallback={<LoadingLayout />}>
            <main className="about-me">
                <BackgroundLayout>
                    <Image
                        height={2700}
                        width={2700}
                        alt="Splash of ink"
                        src={splashInk}
                        loading="lazy"
                    />
                </BackgroundLayout>
                <h1 ref={titleRef} className={poppins.className}>
                    About me
                </h1>
                <FirstSection />
                <SecondSection />
            </main>
        </Suspense>
    );
};

export default AboutMePage;
