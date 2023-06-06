"use client";
import { useEffect, useRef } from "react";
import DoubleImageDivision from "./doubleImage/DoubleImageDivision";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const useAboutOnScroll = () => {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.5,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (aboutRef.current) observer?.observe(aboutRef.current);
    }, [aboutRef, observer]);
    return { aboutRef };
};

const About = () => {
    const { aboutRef } = useAboutOnScroll();
    return (
        <section id="about" className="about" ref={aboutRef}>
            <h2>If you want to learn...</h2>
            <DoubleImageDivision />
        </section>
    );
};

export default About;
