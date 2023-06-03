"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import splashInk from "../../../../public/images/ink-splash.jpg";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const useIntroContainer = () => {
    const introContainerRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver();
    useEffect(() => {
        if (introContainerRef.current)
            observer?.observe(introContainerRef.current);
    }, [introContainerRef, observer]);
    return { introContainerRef };
};

const IntroContainer = () => {
    const { introContainerRef } = useIntroContainer();
    return (
        <div className="intro-container" ref={introContainerRef}>
            <Image
                height={2700}
                width={2700}
                alt="Splash of ink"
                src={splashInk}
            />
            <h1 className="intro-title">
                <span className="hadrien-smet">Hadrien Smet</span>
                <span className="web-developer">Web developer</span>
            </h1>
        </div>
    );
};

export default IntroContainer;
