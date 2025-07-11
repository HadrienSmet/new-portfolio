export type ProjectInterface = {
    code_link: string;
    description: string;
    id: number;
    images: string[];
    image_link: string;
    legends: string[];
    name: string;
    tools: string[];

    code_server_link?: string | null;
    coming_soon?: string;
    link?: string | null;
    videos?: Array<{
        url: string;
        title: string;
        description: string;
    }>;
}
