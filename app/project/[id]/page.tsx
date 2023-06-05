import { prisma } from "@/db/prisma";
import PageProject from "@/components/pageProject/PageProject";

type Props = {
    params: { id: string };
};

const Project = async ({ params }: Props) => {
    const projectId = parseInt(params.id);
    const project = await prisma.projects.findUnique({
        where: { id: projectId },
    });
    return <>{project && <PageProject project={project} />}</>;
};

export default Project;
