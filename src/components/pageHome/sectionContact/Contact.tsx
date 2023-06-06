"use client";
import { useEffect, useRef } from "react";
import FirstRow from "./FirstRow";
import Form from "./Form";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const useContactOnScroll = () => {
    const contactContentRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.25,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (contactContentRef.current)
            observer?.observe(contactContentRef.current);
    }, [contactContentRef, observer]);
    return { contactContentRef };
};

const Contact = () => {
    const { contactContentRef } = useContactOnScroll();
    return (
        <section id="contact" className="contact">
            <div className="contact__content" ref={contactContentRef}>
                <FirstRow />
                <Form />
            </div>
        </section>
    );
};

export default Contact;
