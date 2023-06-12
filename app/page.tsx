import HomePage from "@/components/pageHome/HomePage";
import { projectsData } from "@/data/projectsData";

export default async function Home() {
    const projects = projectsData;

    return <HomePage projects={projects} />;
}
