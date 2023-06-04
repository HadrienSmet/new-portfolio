import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";
import { FaBook, FaMedapps, FaHandsHelping } from "react-icons/fa";

const useSoftSkillsOnScroll = () => {
    const softSkillsRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.5,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (softSkillsRef.current) observer?.observe(softSkillsRef.current);
    }, [softSkillsRef, observer]);
    return { softSkillsRef };
};

const SoftSkills = () => {
    const { softSkillsRef } = useSoftSkillsOnScroll();
    return (
        <div className="about-me__soft-skills" ref={softSkillsRef}>
            <div className="progress" style={{ ["--i" as any]: 75 }}>
                <h3>
                    75<span>%</span>
                </h3>
                <FaBook />
                <h4>Learning</h4>
            </div>
            <div className="progress" style={{ ["--i" as any]: 72 }}>
                <h3>
                    72<span>%</span>
                </h3>
                <FaMedapps />
                <h4>Thinking</h4>
            </div>
            <div className="progress" style={{ ["--i" as any]: 62 }}>
                <h3>
                    62<span>%</span>
                </h3>
                <FaHandsHelping />
                <h4>Inclusive</h4>
            </div>
            <a href="#perso">
                How?
                <br />
                Come see the results from my personality tests!
            </a>
        </div>
    );
};

export default SoftSkills;
