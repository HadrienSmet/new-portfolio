import SvgReact from "../../../assets/svg/SvgReact";
import SvgNextJS from "../../../assets/svg/SvgNextJS";
import SvgSass from "../../../assets/svg/SvgSass";
import SvgNodeJS from "../../../assets/svg/SvgNodeJS";
import SvgExpress from "../../../assets/svg/SvgExpress";
import SvgMongoDB from "../../../assets/svg/SvgMongoDB";
import SvgPostgreSQL from "../../../assets/svg/SvgPostgreSQL";
import SvgSocketIO from "../../../assets/svg/SvgSocketIO";
import SvgTypeScript from "../../../assets/svg/SvgTypeScript";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { poppins } from "../../../assets/fonts";

const useToolsOnScroll = () => {
    const toolsRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({
        threshold: 0.2,
        rootMargin: "0px",
    });
    useEffect(() => {
        if (toolsRef.current) observer?.observe(toolsRef.current);
    }, [toolsRef, observer]);
    return { toolsRef };
};

const Tools = () => {
    const { toolsRef } = useToolsOnScroll();
    return (
        <section id="stacks" className="section-tools" ref={toolsRef}>
            <h2 className={poppins.className}>Stacks</h2>
            <div className="tools-container">
                <SvgSass />
                <SvgTypeScript />
                <SvgReact />
                <SvgNextJS />
                <SvgNodeJS />
                <SvgExpress />
                <SvgSocketIO />
                <SvgMongoDB />
                <SvgPostgreSQL />
            </div>
        </section>
    );
};

export default Tools;
