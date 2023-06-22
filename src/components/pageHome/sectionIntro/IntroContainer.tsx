"use client";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { poppins } from "../../../../assets/fonts";

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
            <h1 className="intro-title" ref={introTitleRef}>
                <span className={`hadrien-smet ${poppins.className}`}>
                    Hadrien Smet
                </span>
                <span className={`web-developer ${poppins.className}`}>
                    Web developer
                </span>
            </h1>
        </div>
    );
};

export default IntroContainer;
