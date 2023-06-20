import PageProject from "@/components/pageProject/PageProject";
import { Metadata } from "next";

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: `Hadrien Smet | Project ${params.id}`,
        description:
            "On this page you will discover all the projects I worked on and all the stacks I used",
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
    return <PageProject projectId={params.id} />;
};

export default Project;
