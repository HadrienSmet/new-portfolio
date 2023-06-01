import FacebookSVG from "../../../../assets/svg/FacebookSVG";
import GithubSVG from "../../../../assets/svg/GithubSVG";
import LinkedInSVG from "../../../../assets/svg/LinkedInSVG";
import TwitterSVG from "../../../../assets/svg/TwitterSVG";

const FirstRow = () => {
    return (
        <div className="contact__first-row">
            <div className="contact__links-container">
                <h2>Wants to work together?</h2>
                <p>Get in touch with me via social media or mail</p>
                <div className="social-media-container">
                    <a href="https://github.com/HadrienSmet">
                        <span className="link-border"></span>
                        <GithubSVG />
                    </a>
                    <a href="https://github.com/HadrienSmet">
                        <span className="link-border"></span>
                        <LinkedInSVG />
                    </a>
                    <a href="https://github.com/HadrienSmet">
                        <span className="link-border"></span>
                        <FacebookSVG />
                    </a>
                    <a href="https://github.com/HadrienSmet">
                        <span className="link-border"></span>
                        <TwitterSVG />
                    </a>
                    <a
                        href="https://i.ibb.co/KsCMMqL/CV-Frontend-developer.jpg"
                        target="_blank"
                        rel="noreferrer"
                    >
                        See my CV
                    </a>
                </div>
            </div>
            <div className="contact__future-picture"></div>
        </div>
    );
};

export default FirstRow;
