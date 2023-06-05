"use client";
import { useEffect, useRef } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import GithubSVG from "../../../../assets/svg/SvgGithub";
import LinkedInSVG from "../../../../assets/svg/SvgLinkedIn";
import GradientBorder from "@/components/ui/GradientBorder";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const useLinksContainer = () => {
    const linksContainerRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (linksContainerRef.current)
            observer?.observe(linksContainerRef.current);
    }, [linksContainerRef, observer]);
    return { linksContainerRef };
};

const LinksContainer = () => {
    const { linksContainerRef } = useLinksContainer();
    return (
        <div className="links-container" ref={linksContainerRef}>
            <em
                data-text="After a few years working in differents fields, I chose to
                follow my dream and I started studying to become a web
                developer. Wants to know more about my work?"
            >
                After a few years working in differents fields, I chose to
                follow my dream and I started studying to become a web
                developer.
                <br />
                Wants to know more about my work?
            </em>
            <div className="links-container-buttons">
                <div className="icons">
                    <a href="https://github.com/HadrienSmet" target="_blank">
                        <span className="link-border"></span>
                        <GithubSVG color="#000" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hadrien-smet-b80022207/"
                        target="_blank"
                    >
                        <span className="link-border"></span>
                        <LinkedInSVG />
                    </a>
                    <a href="mailto:hadriensmet96@gmail.com" target="_blank">
                        <span className="link-border"></span>
                        <FaRegEnvelope />
                    </a>
                </div>
                <GradientBorder>
                    <a
                        href="https://i.ibb.co/KsCMMqL/CV-Frontend-developer.jpg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        See my CV
                    </a>
                </GradientBorder>
            </div>
        </div>
    );
};

export default LinksContainer;
