export interface ProjectInterface {
    id: number;
    name: string;
    images: string[];
    legends: string[];
    image_link: string;
    description: string;
    tools: string[];
    code_link: string;
    code_server_link?: string | null;
    link?: string | null;
}
