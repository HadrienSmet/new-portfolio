import SvgFacebook from "../../../../assets/svg/SvgFacebook";
import SvgGithub from "../../../../assets/svg/SvgGithub";
import SvgLinkedIn from "../../../../assets/svg/SvgLinkedIn";
import SvgTwitter from "../../../../assets/svg/SvgTwitter";

const FirstRow = () => {
    return (
        <div className="contact__first-row">
            <div className="contact__links-container">
                <h2>Wants to work together?</h2>
                <p>Get in touch with me via social media or mail</p>
                <div className="social-media-container">
                    <a href="https://github.com/HadrienSmet">
                        <span className="link-border"></span>
                        <SvgGithub />
                    </a>
                    <a href="https://github.com/HadrienSmet">
                        <span className="link-border"></span>
                        <SvgLinkedIn />
                    </a>
                    <a href="https://github.com/HadrienSmet">
                        <span className="link-border"></span>
                        <SvgFacebook />
                    </a>
                    <a href="https://github.com/HadrienSmet">
                        <span className="link-border"></span>
                        <SvgTwitter />
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
