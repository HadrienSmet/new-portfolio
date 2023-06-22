import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";
import { FaBook, FaMedapps, FaHandsHelping } from "react-icons/fa";
import { poppins } from "../../../../assets/fonts";

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
                <h2>
                    75<span>%</span>
                </h2>
                <FaBook />
                <h3>Learning</h3>
            </div>
            <div className="progress" style={{ ["--i" as any]: 72 }}>
                <h2>
                    72<span>%</span>
                </h2>
                <FaMedapps />
                <h3>Thinking</h3>
            </div>
            <div className="progress" style={{ ["--i" as any]: 62 }}>
                <h2 className={poppins.className}>
                    62<span>%</span>
                </h2>
                <FaHandsHelping />
                <h3>Inclusive</h3>
            </div>
            <a href="#perso" className={poppins.className}>
                How?
                <br />
                Come see the results from my personality tests!
            </a>
        </div>
    );
};

export default SoftSkills;
