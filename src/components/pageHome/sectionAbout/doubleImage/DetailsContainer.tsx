"use client";
import { useEffect, useRef } from "react";

const useDetailsOnMouseMove = () => {
    const myRef = useRef<HTMLDivElement | null>(null);
    const myWorkRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const windowWidth = window.innerWidth;
        const handlePictureOnMouseMove = (e: MouseEvent) => {
            const ratioX = (e.clientX / windowWidth) * 100;
            if (ratioX < 50) {
                myWorkRef.current?.classList.add("visible");
                myRef.current?.classList.remove("visible");
            } else {
                myWorkRef.current?.classList.remove("visible");
                myRef.current?.classList.add("visible");
            }
        };
        window.addEventListener("mousemove", handlePictureOnMouseMove);
        return () => {
            window.removeEventListener("mousemove", handlePictureOnMouseMove);
        };
    }, []);

    return {
        myRef,
        myWorkRef,
    };
};
const DetailsContainer = () => {
    const { myRef, myWorkRef } = useDetailsOnMouseMove();
    return (
        <div className="details-container">
            <div ref={myWorkRef} className="details-about-my-work">
                <h3 data-text="More about my work">More about my work</h3>
                <ul>
                    <li>All my projects</li>
                    <li>The tools I use</li>
                    <li>Technicals skills</li>
                </ul>
            </div>
            <div ref={myRef} className="details-about-me">
                <h3 data-text="More about me">More about me</h3>
                <ul>
                    <li>Soft skills</li>
                    <li>Some pictures</li>
                    <li>Some of my hobbies</li>
                </ul>
            </div>
        </div>
    );
};

export default DetailsContainer;
