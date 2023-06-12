import PageProject from "@/components/pageProject/PageProject";
import { Metadata } from "next";
import { projectsData } from "@/data/projectsData";

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const projectId = parseInt(params.id);
    const project = projectsData.find((project) => project.id === projectId);
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
    const projectId = parseInt(params.id);
    const project = projectsData.find((project) => project.id === projectId);
    return <>{project && <PageProject project={project} />}</>;
};

export default Project;
