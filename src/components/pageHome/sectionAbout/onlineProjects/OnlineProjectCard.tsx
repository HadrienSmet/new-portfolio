import { ProjectInterface } from "@/interfaces/Project";
import Image from "next/image";

type PropsType = {
    project: ProjectInterface;
};

const OnlineProjectCard = ({ project }: PropsType) => {
    return (
        <div className="online-project__card">
            <Image
                src={`/images/${project.image_link}`}
                alt={`Illustration du projet: ${project.name}`}
                width={300}
                height={300}
            />
            <div className="online-project__card-content">
                <h3>{project.name}</h3>
                <ul>
                    {project.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default OnlineProjectCard;
