"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import splashInk from "../../../../public/images/ink-splash.jpg";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import BackgroundLayout from "@/components/BackgroundLayout";

const useIntroTitle = () => {
    const introTitleRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.2,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (introTitleRef.current) observer?.observe(introTitleRef.current);
    }, [introTitleRef, observer]);
    return { introTitleRef };
};

const IntroContainer = () => {
    const { introTitleRef } = useIntroTitle();
    return (
        <div className="intro-container">
            {/* <BackgroundLayout>
                <Image
                    height={2700}
                    width={2700}
                    alt="Splash of ink"
                    src={splashInk}
                />
            </BackgroundLayout> */}
            <h1 className="intro-title" ref={introTitleRef}>
                <span className="hadrien-smet">Hadrien Smet</span>
                <span className="web-developer">Web developer</span>
            </h1>
        </div>
    );
};

export default IntroContainer;
