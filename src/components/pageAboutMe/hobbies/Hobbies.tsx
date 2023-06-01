"use client";
import { hobbiesData } from "@/data/hobbiesData";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useState, useEffect, MouseEvent } from "react";
import HobbyImage from "./HobbyImage";

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

const Hobbies = () => {
    const { x, y } = useMousePosition();
    const { screenWidth } = useHobbiesSize();
    const { activeIndex, handleActiveIndex, resetActiveIndex } = useHobbies();
    return (
        <div className="about-me__hobbies">
            <h2>Hobbies</h2>
            <ul>
                <li
                    id="hobby-0"
                    onMouseEnter={handleActiveIndex}
                    onMouseLeave={resetActiveIndex}
                >
                    Travelling alone with my backpack
                </li>
                <li
                    id="hobby-1"
                    onMouseEnter={handleActiveIndex}
                    onMouseLeave={resetActiveIndex}
                >
                    Coding
                </li>
                <li
                    id="hobby-2"
                    onMouseEnter={handleActiveIndex}
                    onMouseLeave={resetActiveIndex}
                >
                    Learning new things
                </li>
                <li
                    id="hobby-3"
                    onMouseEnter={handleActiveIndex}
                    onMouseLeave={resetActiveIndex}
                >
                    Reading philosophy
                </li>
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
