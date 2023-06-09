import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef, useEffect } from "react";

const useFewWordsOnScroll = () => {
    const fewWordsRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.2,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (fewWordsRef.current) observer?.observe(fewWordsRef.current);
    }, [fewWordsRef, observer]);
    return { fewWordsRef };
};

const FewWords = () => {
    const { fewWordsRef } = useFewWordsOnScroll();
    return (
        <div className="about-me__few-words" ref={fewWordsRef}>
            <h2>Few words</h2>
            <div className="text-container">
                <p>
                    Hi! I am a junior developer living in Brussels. My native
                    language is French but I also speak fluently English and I
                    understand Dutch.
                </p>
                <p>
                    I am a passionate and enthusiastic fullstack junior
                    developer, recently graduated from a web development
                    program. I love traveling and discovering new cultures, and
                    I hope to have the opportunity to live and work abroad one
                    day. In addition to web development, I enjoy learning new
                    things, and exploring philosophy. I am a positive,
                    optimistic, and dynamic person, always ready to tackle new
                    challenges and learn new things. I am excited to use my
                    skills and enthusiasm to serve a company and work on
                    exciting projects.
                </p>
            </div>
        </div>
    );
};

export default FewWords;
