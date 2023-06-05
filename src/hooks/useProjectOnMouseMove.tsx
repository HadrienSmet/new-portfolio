import { useRef, useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";

const useScreenWidth = () => {
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

export const useProjectOnMouseMove = () => {
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [isHover, setIsHover] = useState(false);
    const { screenWidth } = useScreenWidth();

    const handleMouseEnter = () => setIsHover(() => true);
    const handleMouseLeave = () => setIsHover(() => false);
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = imgRef.current?.getBoundingClientRect();
            if (rect) {
                const index = imgRef.current?.id.split("-")[1];
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const ratioX = -(x / rect.width) * 40 + 20;
                const ratioY = -(y / rect.height) * 40 + 20;

                imgRef.current!.style.setProperty(
                    `--img${index}-trans-x`,
                    `${ratioX}px`
                );
                imgRef.current!.style.setProperty(
                    `--img${index}-trans-y`,
                    `${ratioY}px`
                );
            }
        };
        if (screenWidth && screenWidth >= 1025) {
            if (isHover) window.addEventListener("mousemove", handleMouseMove);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isHover, screenWidth]);
    return {
        imgRef,
        handleMouseEnter,
        handleMouseLeave,
    };
};
