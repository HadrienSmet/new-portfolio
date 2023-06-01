import Image from "next/image";

type HobbyImgPropsType = {
    url: string;
    active: boolean;
    x: number;
    y: number;
};
const HobbyImage = ({ url, active, x, y }: HobbyImgPropsType) => {
    return (
        <Image
            className={active ? "is-active" : ""}
            src={"/images/" + url}
            alt="Picture of my hobby"
            width={400}
            height={400}
            style={{
                transform: `translate(${x + 100}px, ${
                    y - 200
                }px) rotate(15deg)`,
            }}
        />
    );
};

export default HobbyImage;
