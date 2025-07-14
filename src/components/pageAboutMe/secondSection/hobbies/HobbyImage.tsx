import Image from "next/image";

type HobbyImgPropsType = {
    url: string;
    index: number;
    active: boolean;
    x: number;
    y: number;
};
const HobbyImage = ({ url, index, active, x, y }: HobbyImgPropsType) => {
    return (
        <Image
            className={active ? "is-active" : ""}
            src={"/images/" + url}
            alt={`Picture of my ${index}th hobby`}
            width={400}
            height={400}
            style={{
                transform: `translate(${x + 50}px, ${
                    y - 120
                }px) rotate(15deg)`,
            }}
        />
    );
};

export default HobbyImage;
