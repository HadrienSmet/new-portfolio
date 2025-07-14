"use client";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useWindowSize } from "@/hooks/useWindowSize";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const useCurrentSize = () => {
    const [screenWidth, setScreenWidth] = useState<number | undefined>(
        undefined
    );
    const windowSize = useWindowSize();

    useEffect(() => {
        if (windowSize.width === undefined) {
            setScreenWidth(window.innerWidth);
        } else {
            setScreenWidth(windowSize.width);
        }
    }, [windowSize.width]);

    return { screenWidth };
};

const useDetailsOnMouseMove = () => {
    const { screenWidth } = useCurrentSize();
    const myRef = useRef<HTMLAnchorElement | null>(null);
    const myWorkRef = useRef<HTMLAnchorElement | null>(null);
    useEffect(() => {
        const windowWidth = window.innerWidth;
        const handlePictureOnMouseMove = (e: MouseEvent) => {
            const ratioX = (e.clientX / windowWidth) * 100;
            if (ratioX < 50) {
                myWorkRef.current?.classList.add("visible");
                myRef.current?.classList.remove("visible");
            } else {
                myWorkRef.current?.classList.remove("visible");
                myRef.current?.classList.add("visible");
            }
        };
        if (screenWidth && screenWidth > 1025) {
            window.addEventListener("mousemove", handlePictureOnMouseMove);
        }
        if (screenWidth && screenWidth < 1025) {
            myWorkRef.current?.classList.add("visible");
            myRef.current?.classList.add("visible");
        }
        return () => {
            window.removeEventListener("mousemove", handlePictureOnMouseMove);
        };
    }, [screenWidth]);

    return {
        myRef,
        myWorkRef,
    };
};
const useDetailsOnScroll = () => {
    const detailsRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (detailsRef.current) observer?.observe(detailsRef.current);
    }, [detailsRef, observer]);
    return { detailsRef };
};
const DetailsContainer = () => {
    const { myRef, myWorkRef } = useDetailsOnMouseMove();
    const { detailsRef } = useDetailsOnScroll();
    return (
        <div ref={detailsRef} className="details-container">
            <Link
                href={"/aboutMyWork"}
                ref={myWorkRef}
                className="details-about-my-work"
            >
                <h3>More about my work</h3>
                <ul>
                    <li>All my projects</li>
                    <li>The tools I use</li>
                </ul>
            </Link>
            <Link href={"/aboutMe"} ref={myRef} className="details-about-me">
                <h3>More about me</h3>
                <ul>
                    <li>Soft skills</li>
                    <li>Some pictures</li>
                    <li>Some of my hobbies</li>
                    <li>Personality tests</li>
                </ul>
            </Link>
        </div>
    );
};

export default DetailsContainer;
