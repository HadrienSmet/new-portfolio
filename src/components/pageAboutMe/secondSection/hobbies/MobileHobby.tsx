import { MobileHobbyDataAsProps } from "@/data/hobbiesData";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Image from "next/image";
import { useEffect, useRef } from "react";

const useContainerOnScroll = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.2,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (containerRef.current) observer?.observe(containerRef.current);
    }, [containerRef, observer]);
    return { containerRef };
};

const MobileHobby = ({ hobby }: MobileHobbyDataAsProps) => {
    const { containerRef } = useContainerOnScroll();
    return (
        <div className="mobile-hobby-container" ref={containerRef}>
            <Image
                src={"/images/" + hobby.mediaUrl}
                alt={"Picture of " + hobby.text}
                width={400}
                height={400}
            />
            <p>{hobby.text}</p>
        </div>
    );
};

export default MobileHobby;
