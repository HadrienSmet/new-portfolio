"use client";
import { FaAngleDoubleUp, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

import { handleScrollToTop } from "@/utils/handleScrolltoTop";

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
                    aria-label="Link to my linkedIn"
                >
                    <FaLinkedin className="active" />
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/HadrienSmet"
                    target="_blank"
                    id="footer-github"
                    className="footer__link-container"
                    aria-label="Link to my github"
                >
                    <SvgGithub dynamicClass="active" color="#0076b2" />
                    <SvgGithub dynamicClass="" color="#fff" />
                </a>
                <a
                    href="mailto:hadriensmet96@gmail.com"
                    target="_blank"
                    id="footer-mail"
                    className="footer__link-container"
                    aria-label="Send me a mail from you mailbox"
                >
                    <FaRegEnvelope className="active" />
                    <FaRegEnvelope />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
