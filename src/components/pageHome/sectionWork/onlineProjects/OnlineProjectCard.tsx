import { ProjectInterface } from "@/interfaces/Project";
import Image from "next/image";
import { MouseEvent } from "react";

type PropsType = {
    project: ProjectInterface;
    handleProjectName: (event: MouseEvent) => void;
};

const OnlineProjectCard = ({ project, handleProjectName }: PropsType) => {
    return (
        <div
            onClick={handleProjectName}
            className="online-project__card"
            id={project.name}
        >
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
