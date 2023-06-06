import { useMyNavigationContext } from "@/context/NavigationContext";
import { usePathname, useRouter } from "next/navigation";
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
    const [isNavOpen, setIsNavOpen] = useMyNavigationContext();
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
        if (!isNavOpen) window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollY, headerRef, isNavOpen]);

    return { headerRef };
};

const useHeaderButton = ({ headerRef }: PropsType) => {
    const [isNavOpen, setIsNavOpen] = useMyNavigationContext();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const classToggler = (target: Element) => {
        setIsNavOpen(!isNavOpen);
    };
    useEffect(() => {
        if (isNavOpen) {
            buttonRef.current?.classList.add("opened");
            headerRef.current!.classList.add("opened");
        } else {
            buttonRef.current?.classList.remove("opened");
            headerRef.current!.classList.remove("opened");
        }
    }, [isNavOpen, headerRef]);

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
        buttonRef,
        handleButtonBehavior,
    };
};

const useHeader = () => {
    const [pageNav, setPageNav] = useState<JSX.Element | null>(null);
    const pathname = usePathname();
    useEffect(() => {
        console.log(pathname);
        switch (true) {
            case pathname === "/":
                console.log("should display the home nav");
                const homeNav = (
                    <nav>
                        <a href="#intro">Intro</a>
                        <a href="#work">Projects</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                    </nav>
                );
                setPageNav(homeNav);
                break;
            case pathname === "/aboutMe":
                console.log("should display the about me nav");
                const myNav = (
                    <nav>
                        <a href="#my-intro">Intro</a>
                        <a href="#hobbies">Hobbies</a>
                        <a href="#perso">Personality</a>
                    </nav>
                );
                setPageNav(myNav);
                break;
            case pathname === "/aboutMyWork":
                console.log("should display the about my work nav");
                console.log("should display the about me nav");
                const workNav = (
                    <nav>
                        <a href="#stacks">Stacks</a>
                        <a href="#projects">Projects</a>
                    </nav>
                );
                setPageNav(workNav);
                break;
            case pathname.startsWith("/project/"):
                console.log("should display the project nav");
                setPageNav(null);
                break;
            default:
                console.log("unknown page");
                setPageNav(null);
        }
    }, [pathname]);
    return { pageNav };
};

const Header = () => {
    const headerRef = useRef<HTMLDivElement | null>(null);
    const { buttonRef, handleButtonBehavior } = useHeaderButton({ headerRef });
    useHeaderOnScroll({ headerRef });
    const { pageNav } = useHeader();
    return (
        <header ref={headerRef}>
            <h1>Hadri</h1>
            {pageNav && pageNav}
            <button
                ref={buttonRef}
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
