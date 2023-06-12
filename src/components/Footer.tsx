"use client";
import { handleScrollToTop } from "@/utils/handleScrolltoTop";
import { FaAngleDoubleUp, FaLinkedin, FaRegEnvelope } from "react-icons/fa";
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
                <a
                    href="https://github.com/HadrienSmet"
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
