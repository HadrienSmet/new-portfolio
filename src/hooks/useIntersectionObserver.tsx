import { useEffect, useState } from "react";
export const useIntersectionObserver = () => {
    const [observer, setObserver] = useState<IntersectionObserver | null>(null);
    useEffect(() => {
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
        setObserver(observer);
    }, []);

    return observer;
};
