import { Inter, Poppins, Rock_Salt } from "next/font/google";

export const inter = Inter({
    subsets: ["latin"],
    variable: "--main-font",
});

export const rockSalt = Rock_Salt({
    subsets: ["latin"],
    variable: "--graff-font",
    weight: "400",
});

export const poppins = Poppins({
    subsets: ["latin"],
    variable: "--title-font",
    weight: ["400", "900"],
});
