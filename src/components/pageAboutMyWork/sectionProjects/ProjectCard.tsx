import { ProjectInterface } from "@/interfaces/Project";
import Image from "next/image";

type ProjectCardPropsType = {
    project: ProjectInterface;
};

const ProjectCard = ({ project }: ProjectCardPropsType) => {
    return (
        <div className="project-card">
            <Image
                src={`/images/${project.image_link}`}
                alt={`Illustration du projet: ${project.name}`}
                width={300}
                height={300}
            />
            <div className="project-card__content">
                <h3>{project.name}</h3>
                <ul>
                    {project.tools.map((tool, i) => (
                        <li key={`tool-${i}`}>{tool}</li>
                    ))}
                </ul>
                <a href="/">more</a>
            </div>
        </div>
    );
};

export default ProjectCard;
