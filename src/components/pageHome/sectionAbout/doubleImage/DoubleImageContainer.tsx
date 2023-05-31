"use client";
import { MutableRefObject, useEffect, useRef } from "react";
import Image from "next/image";
import pictureAboutWork from "../../../../../public/images/photo-cv_pochoir-rsz.webp";
import pictureAboutMe from "../../../../../public/images/photo-cv_151222-bgless.webp";

const handleDoubleImageTranslateX = (
    ratio: number,
    element: MutableRefObject<HTMLDivElement | null>
) => {
    if (element.current !== null) {
        let translateInPx = 400 - 2 * 4 * ratio;
        element.current.style.setProperty(
            "--div-translation",
            `${translateInPx}px`
        );
    }
};

const handleContainersWidth = (
    ratio: number,
    firstRef: MutableRefObject<HTMLDivElement | null>,
    secondRef: MutableRefObject<HTMLDivElement | null>
) => {
    if (firstRef.current !== null && secondRef.current !== null) {
        if (ratio <= 25) {
            firstRef.current.style.setProperty("--first-div-width", `100%`);
            secondRef.current.style.setProperty("--second-div-width", `0%`);
        } else if (ratio >= 75) {
            firstRef.current.style.setProperty("--first-div-width", `0%`);
            secondRef.current.style.setProperty("--second-div-width", `100%`);
        } else {
            firstRef.current.style.setProperty(
                "--first-div-width",
                `${100 - (ratio - 25) * 2}%`
            );
            secondRef.current.style.setProperty(
                "--second-div-width",
                `${(ratio - 25) * 2}%`
            );
        }
    }
};

const useImageMouseMove = () => {
    const doubleImgRef = useRef<HTMLDivElement | null>(null);
    const firstImgContainerRef = useRef<HTMLDivElement | null>(null);
    const secondImgContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const windowWidth = window.innerWidth;
        const handlePictureOnMouseMove = (e: MouseEvent) => {
            const ratioX = (e.clientX / windowWidth) * 100;
            handleContainersWidth(
                ratioX,
                firstImgContainerRef,
                secondImgContainerRef
            );
            handleDoubleImageTranslateX(ratioX, doubleImgRef);
        };
        window.addEventListener("mousemove", handlePictureOnMouseMove);
        return () => {
            window.removeEventListener("mousemove", handlePictureOnMouseMove);
        };
    }, []);
    return {
        doubleImgRef,
        firstImgContainerRef,
        secondImgContainerRef,
    };
};

const useImageOnScroll = () => {
    useEffect(() => {
        const isBrowser = typeof window !== "undefined";
        const doubleImgEl =
            isBrowser && (document.getElementById("double-image") as Element);

        const options = {
            root: null,
            threshold: 0.5,
            rootMargin: "0px",
        };
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, options);
        if (doubleImgEl !== false) observer.observe(doubleImgEl);
    }, []);
};

const DoubleImageContainer = () => {
    const { doubleImgRef, firstImgContainerRef, secondImgContainerRef } =
        useImageMouseMove();
    useImageOnScroll();
    return (
        <div
            id="double-image"
            ref={doubleImgRef}
            className="double-img-container"
        >
            <div ref={firstImgContainerRef} className="first-img-container">
                <Image
                    src={pictureAboutWork}
                    alt="Illustration of myself"
                    width={550}
                    height={420}
                />
            </div>
            <div ref={secondImgContainerRef} className="second-img-container">
                <Image
                    src={pictureAboutMe}
                    alt="Picture of myself"
                    width={550}
                    height={420}
                />
            </div>
        </div>
    );
};

export default DoubleImageContainer;
