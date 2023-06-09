"use client";
import { useMyNavigationContext } from "@/context/NavigationContext";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { poppins } from "../../assets/fonts";

const useNavigation = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const [isNavOpen, setIsNavOpen] = useMyNavigationContext();
    useEffect(() => {
        if (isNavOpen) {
            navRef.current?.classList.add("opened");
        } else {
            navRef.current?.classList.remove("opened");
        }
    }, [isNavOpen]);
    const closeNav = () => {
        setIsNavOpen(false);
    };

    return { navRef, closeNav };
};

const Navigation = () => {
    const { navRef, closeNav } = useNavigation();
    return (
        <nav className={`app-nav ${poppins.className}`} ref={navRef}>
            <ul>
                <li>
                    <Link href="/" onClick={closeNav}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/aboutMyWork" onClick={closeNav}>
                        About my work
                    </Link>
                </li>
                <li>
                    <Link href="/aboutMe" onClick={closeNav}>
                        About me
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
