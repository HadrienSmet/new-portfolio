import { useEffect, useState } from "react";

type hoosPropsType = {
    threshold: number;
    rootMargin: string;
};

export const useIntersectionObserver = ({
    threshold,
    rootMargin,
}: hoosPropsType) => {
    const [observer, setObserver] = useState<IntersectionObserver | null>(null);
    useEffect(() => {
        const options = {
            root: null,
            threshold: threshold,
            rootMargin: rootMargin,
        };
        const observer = new IntersectionObserver(function (entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("invisible");
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                    entry.target.classList.add("invisible");
                }
            });
        }, options);
        setObserver(observer);
    }, [rootMargin, threshold]);

    return observer;
};
