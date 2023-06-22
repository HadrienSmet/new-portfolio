import { MouseEvent, useRef, useEffect } from "react";
import { rockSalt } from "../../../../../assets/fonts";

type HobbyPropsType = {
    text: string;
    index: number;
    handleActiveIndex: (e: MouseEvent<HTMLLIElement>) => void;
    resetActiveIndex: () => void;
};

const useHobbyOnScroll = () => {
    const hobbyRef = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        const options = {
            root: null,
            threshold: 1,
            rootMargin: "0px 0px -50px",
        };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        }, options);
        if (hobbyRef.current) observer.observe(hobbyRef.current);
    }, []);

    return {
        hobbyRef,
    };
};

const Hobby = ({
    text,
    index,
    handleActiveIndex,
    resetActiveIndex,
}: HobbyPropsType) => {
    const { hobbyRef } = useHobbyOnScroll();
    return (
        <li
            ref={hobbyRef}
            className={"hobby " + rockSalt.className}
            id={`hobby-${index}`}
            onMouseEnter={handleActiveIndex}
            onMouseLeave={resetActiveIndex}
        >
            <div className="hobby-background"></div>
            <div className="hobby-content">
                <h3>{text}</h3>
            </div>
        </li>
    );
};

export default Hobby;
