import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    const project = await prisma.project.create({
        data: {
            name: "Gartic Clone",
        },
    });

    console.log(project);
}

main()
    .catch((e) => {
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
