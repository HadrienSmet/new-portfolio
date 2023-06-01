import { useEffect, useState } from "react";

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const updateMousePosition = (e: MouseEvent) =>
        setMousePosition({ x: e.clientX, y: e.clientY });

    useEffect(() => {
        document.addEventListener("mousemove", updateMousePosition);
        return () =>
            document.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return mousePosition;
};
