import { handleScrollToTop } from "@/utils/handleScrolltoTop";
import React from "react";
import {
    FaAngleDoubleUp,
    FaFacebook,
    FaLinkedin,
    FaRegEnvelope,
} from "react-icons/fa";
import SvgLinkedIn from "../../assets/svg/SvgLinkedIn";
import SvgGithub from "../../assets/svg/SvgGithub";

const Footer = () => {
    return (
        <footer className="footer">
            <FaAngleDoubleUp onClick={handleScrollToTop} />
            <em>Hadri</em>
            <div className="footer__links-container">
                <a
                    href="https://www.linkedin.com/in/hadrien-smet-b80022207/"
                    target="_blank"
                    id="footer-linkedin"
                    className="footer__link-container"
                >
                    <FaLinkedin
                        className="active"
                        aria-label="Link to my linkedIn"
                    />
                    <FaLinkedin aria-label="Link to my linkedIn" />
                </a>
                {/* <a
                    href="https://www.facebook.com/hadrien.smet/"
                    target="_blank"
                    id="footer-facebook"
                    className="footer__link-container"
                >
                    <FaFacebook
                        className="active"
                        aria-label="Link to my facebook"
                    />
                    <FaFacebook aria-label="Link to my facebook" />
                </a> */}
                <a
                    href="https://www.linkedin.com/in/hadrien-smet-b80022207/"
                    target="_blank"
                    id="footer-linkedin"
                    className="footer__link-container"
                >
                    <SvgGithub
                        dynamicClass="active"
                        color="#0076b2"
                        aria-label="Link to my linkedIn"
                    />
                    <SvgGithub
                        dynamicClass=""
                        color="#fff"
                        aria-label="Link to my linkedIn"
                    />
                </a>
                <a
                    href="mailto:hadriensmet96@gmail.com"
                    target="_blank"
                    id="footer-mail"
                    className="footer__link-container"
                >
                    <FaRegEnvelope
                        className="active"
                        aria-label="Send me a mail from you mailbox"
                    />
                    <FaRegEnvelope aria-label="Send me a mail from you mailbox" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
