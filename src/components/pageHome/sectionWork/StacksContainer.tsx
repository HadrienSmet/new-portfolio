"use client";
import { useEffect, useRef } from "react";
import SvgSass from "../../../../assets/svg/SvgSass";
import SvgTypeScript from "../../../../assets/svg/SvgTypeScript";
import SvgReact from "../../../../assets/svg/SvgReact";
import SvgNextJS from "../../../../assets/svg/SvgNextJS";
import SvgNodeJS from "../../../../assets/svg/SvgNodeJS";
import SvgExpress from "../../../../assets/svg/SvgExpress";
import SvgSocketIO from "../../../../assets/svg/SvgSocketIO";
import SvgMongoDB from "../../../../assets/svg/SvgMongoDB";
import SvgPostgreSQL from "../../../../assets/svg/SvgPostgreSQL";
import { SvgAws, SvgDocker} from "../../../../assets";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const useStacksContainer = () => {
    const stacksContainerRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 1,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (stacksContainerRef.current)
            observer?.observe(stacksContainerRef.current);
    }, [stacksContainerRef, observer]);
    return { stacksContainerRef };
};

const StacksContainer = () => {
    const { stacksContainerRef } = useStacksContainer();
    return (
        <div ref={stacksContainerRef} className="stacks-container">
            <SvgSass />
            <SvgTypeScript />
            <SvgReact />
            <SvgNextJS />
            <SvgNodeJS />
            <SvgExpress />
            <SvgSocketIO />
            <SvgMongoDB />
            <SvgPostgreSQL />
            <SvgAws />
            <SvgDocker />
        </div>
    );
};

export default StacksContainer;
