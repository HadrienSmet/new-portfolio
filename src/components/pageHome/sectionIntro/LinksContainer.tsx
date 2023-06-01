import { FaRegEnvelope } from "react-icons/fa";
import GithubSVG from "../../../../assets/svg/GithubSVG";
import LinkedInSVG from "../../../../assets/svg/LinkedInSVG";
import GradientBorder from "@/components/ui/GradientBorder";

const LinksContainer = () => {
    return (
        <div className="links-container">
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
                    <a href="https://github.com/HadrienSmet">
                        <span className="link-border"></span>
                        <GithubSVG />
                    </a>
                    <a href="https://www.linkedin.com/in/hadrien-smet-b80022207/">
                        <span className="link-border"></span>
                        <LinkedInSVG />
                    </a>
                    <a href="mailto:hadriensmet96@gmail.com">
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
