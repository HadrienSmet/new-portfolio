import {
    MouseEvent,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from "react";

type PropsType = {
    headerRef: MutableRefObject<HTMLDivElement | null>;
};

const useHeaderOnScroll = ({ headerRef }: PropsType) => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current !== null && window.scrollY < scrollY) {
                headerRef.current.style.top = "0";
            } else if (headerRef.current !== null && window.scrollY > scrollY) {
                headerRef.current.style.top = "-104px";
            }
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY, headerRef]);

    return { headerRef };
};

const useHeaderButton = ({ headerRef }: PropsType) => {
    const classToggler = (target: Element) => {
        const isBrowser = typeof window !== "undefined";
        if (isBrowser) document.body.classList.toggle("opened");
        target.classList.toggle("opened");
        // navigation?.classList.toggle("opened");
        headerRef.current!.classList.toggle("opened");
    };

    const targetAttributeToggler = (target: Element) => {
        const isExpanded = target.getAttribute("aria-expanded") === "true";
        target.setAttribute("aria-expanded", !isExpanded ? "true" : "false");
    };

    const handleButtonBehavior = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.target as Element;
        classToggler(target);
        targetAttributeToggler(target);
    };

    return {
        handleButtonBehavior,
    };
};

const Header = () => {
    const headerRef = useRef<HTMLDivElement | null>(null);
    const { handleButtonBehavior } = useHeaderButton({ headerRef });
    useHeaderOnScroll({ headerRef });
    return (
        <header ref={headerRef}>
            <h1>Hadri</h1>
            <button
                className="menu"
                onClick={handleButtonBehavior}
                aria-label="Main Menu"
            >
                <svg
                    id="toggle-nav-button"
                    width="100"
                    height="100"
                    viewBox="0 0 100 100"
                >
                    <path
                        className="line line1"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                    />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path
                        className="line line3"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                    />
                </svg>
            </button>
        </header>
    );
};

export default Header;
