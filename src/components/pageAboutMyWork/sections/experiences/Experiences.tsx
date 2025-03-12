import { useEffect, useRef } from "react";

import { poppins } from "../../../../../assets/fonts";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Experience, ExperienceProps } from "./Experience";

const useExperiencesOnScroll = () => {
    const experiencesRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.2,
        rootMargin: "0px",
    });

    useEffect(() => {
        if (experiencesRef.current && observer) observer.observe(experiencesRef.current);
    }, [experiencesRef, observer]);

    return { experiencesRef };
};

const EXPERIENCES: Array<ExperienceProps> = [
    {
        company: "Reach Up",
        period: { from: "10.2024", to: "Now" },
        title: "Front-end developper",
        description: "As a Full-Stack Developer with a strong emphasis on Front-End Development, I have spent the past 1.5 years contributing to a fast-paced startup, where I played a key role in shaping and optimizing the user experience. On the front end, I designed and implemented new pages, components, and forms, ensuring a smooth and responsive experience across devices. I handled offline functionality, UI updates, email displays, and application versioning, always striving for clean, maintainable, and scalable code. Beyond front-end, I expanded my expertise into the back-end, working extensively with AWS services to develop data processing pipelines, database interactions (DynamoDB), and system integrations. I implemented batch processing, encryption strategies, and cloud infrastructure improvements, showcasing my ability to bridge the gap between front-end and back-end technologies. I thrive in collaborative environments, enjoy tackling complex technical challenges, and am passionate about delivering high-quality user interfaces that enhance engagement and performance.",
        stacks: ["React", "React-Native", "TypeScript", "NodeJS", "AWS"],
    },
];

export const Experiences = () => {
    const { experiencesRef } = useExperiencesOnScroll();

    return (
        <section className="section-experiences" ref={experiencesRef}>
            <h2 className={poppins.className}>Experiences</h2>
            {EXPERIENCES.map(experience => (<Experience key={`experience-${experience.title}`} {...experience} />))}
        </section>
    );
};
