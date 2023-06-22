import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";
import { poppins } from "../../../../assets/fonts";

const usePersonalityOnScroll = () => {
    const personalityRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 1,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (personalityRef.current) observer?.observe(personalityRef.current);
    }, [personalityRef, observer]);
    return { personalityRef };
};

const Personality = () => {
    const { personalityRef } = usePersonalityOnScroll();
    return (
        <div id="perso" className="about-me__personality" ref={personalityRef}>
            <h2 className={poppins.className}>Personality</h2>
            <p>
                If you wants to learn more about what kind of person I am here
                are the results of my personality tests
            </p>
            <div className={"about-me__personality-links " + poppins.className}>
                <a
                    href="https://drive.google.com/file/d/1-QeTq0lufeknbFwk2UyQT3n9cbgYitUm/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    MBTI
                </a>
                <a
                    href="https://drive.google.com/file/d/1t7oAlXpJPd9hf5D8XtfAjNhEVxJVACWR/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Talents
                </a>
            </div>
        </div>
    );
};

export default Personality;
