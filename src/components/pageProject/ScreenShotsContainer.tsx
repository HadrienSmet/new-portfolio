import Image from "next/image";
import { ProjectAsProps } from "../../../types/ProjectAsProps";

const ScreenShotsContainer = ({ project }: ProjectAsProps) => {
    return (
        <div className="screenshots-container">
            {project.images.map((img, i) => (
                <Image
                    key={`img-${i}`}
                    onClick={() => window.open("/images/" + img, "_blank")}
                    priority
                    src={"/images/" + img}
                    alt={`Screenshoot number ${i} of ${project.name}`}
                    width={256}
                    height={124}
                />
            ))}
            <em>Click on the image to see it in its full size</em>
        </div>
    );
};

export default ScreenShotsContainer;
