import PageProject from "@/components/pageProject/PageProject";
import { Metadata } from "next";
import { projectsData } from "@/data/projectsData";

type Props = {
    params: { id: string };
};

const getRightProject = (id: string) => {
    const project = projectsData.find((project) => project.id === parseInt(id));
    return project;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const project = getRightProject(params.id);
    return {
        title: `Hadrien Smet | ${project?.name}`,
        description: project?.description,
        icons: [
            {
                rel: "shortcut icon",
                type: "image/x-icon",
                sizes: "48x48",
                url: "/images/favicon.ico",
            },
        ],
    };
}

const Project = async ({ params }: Props) => {
    const project = getRightProject(params.id);
    if (project === undefined) throw Error("This project does not exist");
    return <>{project && <PageProject project={project} />}</>;
};

export default Project;
