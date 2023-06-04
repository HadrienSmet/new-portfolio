"use client";
import { hobbiesData } from "@/data/hobbiesData";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useState, useEffect, MouseEvent, useRef } from "react";
import HobbyImage from "./HobbyImage";
import Hobby from "./Hobby";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const hobbyArray = [
    {
        index: 0,
        text: "Travelling alone with my backpack",
    },
    {
        index: 1,
        text: "Coding",
    },
    {
        index: 2,
        text: "Learning new things",
    },
    {
        index: 3,
        text: "Reading philosophy",
    },
];

const useHobbiesSize = () => {
    const windowSize = useWindowSize();
    const [screenWidth, setScreenWidth] = useState<number | undefined>(
        undefined
    );
    useEffect(() => {
        if (windowSize.width === undefined) {
            setScreenWidth(() => window.innerWidth);
        } else {
            setScreenWidth(() => windowSize.width);
        }
    }, [windowSize.width]);

    return { screenWidth };
};

const useHobbies = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleActiveIndex = (e: MouseEvent<HTMLLIElement>) => {
        const element = e.target as HTMLElement;
        const elementIndex = element.id.split("-")[1];
        setActiveIndex(parseInt(elementIndex));
    };
    const resetActiveIndex = () => {
        setActiveIndex(-1);
    };

    return {
        activeIndex,
        handleActiveIndex,
        resetActiveIndex,
    };
};

const useTitleOnScroll = () => {
    const titleRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.25,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (titleRef.current) observer?.observe(titleRef.current);
    }, [titleRef, observer]);
    return { titleRef };
};

const Hobbies = () => {
    const { x, y } = useMousePosition();
    const { screenWidth } = useHobbiesSize();
    const { activeIndex, handleActiveIndex, resetActiveIndex } = useHobbies();
    const { titleRef } = useTitleOnScroll();
    return (
        <div className="about-me__hobbies">
            <h2 ref={titleRef}>Hobbies</h2>
            <ul>
                {hobbyArray.map((hobby) => (
                    <Hobby
                        key={hobby.index}
                        text={hobby.text}
                        index={hobby.index}
                        handleActiveIndex={handleActiveIndex}
                        resetActiveIndex={resetActiveIndex}
                    />
                ))}
            </ul>
            {screenWidth && screenWidth > 1024 && (
                <div className="hobbies-pictures">
                    {hobbiesData.map(({ mediaUrl }, index) => {
                        const isActive = index === activeIndex;
                        const posX = isActive ? x : 0;
                        const posY = isActive ? y : 0;
                        return (
                            <HobbyImage
                                key={index}
                                url={mediaUrl}
                                active={isActive}
                                x={posX}
                                y={posY}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Hobbies;
