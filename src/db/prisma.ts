import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ["query"],
    });

const seedDataBase = async () => {
    const existingProjectsCount = await prisma.projects.count();
    if (existingProjectsCount === 0) {
        await prisma.projects.createMany({
            data: [
                {
                    name: "Travel App - First project on my own",
                    images: [
                        "travel-app-signup-album.webp",
                        "travelApp-signup.webp",
                        "travelApp-home.webp",
                        "travelApp-profile.webp",
                        "travelApp-profile-album.webp",
                        "travelApp-mobile.webp",
                    ],
                    legends: [
                        "Modal to create a album during the sign up form",
                        "The last step of the sign up form",
                        "A part of the posts on the home page",
                        "Profile page",
                        "Modal to explore an album of a user",
                        "The viewport of the home page of the mobile version",
                    ],
                    image_link: "travelApp-profile.webp",
                    description:
                        "When I started developping this website I was dreaming about a tool that would help and fit to any kind of travellers. I wanted to create a place where we could meet and talk to people, share pictures from your trip and precise where you took it on a map, book hostels and plane tickets and save all those data in the same place in the user's phone, share your trip and all kinds of tips like that an algo could have offer great trip to the futur users based on the data provided by the users. And even warns you about hard to cross borders and provides you all the links to your ambassy to get you visa. But this app will probably never possess all those functionalities. I implemented a signing in form made of three steps. The first one is for the authentification data, the second one for his personal data like the user's name and the third one is for the extra data (all the data that will be public). Every user can create a post containing a text and or a picture. After creating it he can delete it or edit it if he wants. An admin possess the same rights to insure that the app remains a secure area for all the users. All the posts can be filtered by country. A like and dislike logic has been implemented on the posts. Every user has his own profile page where he can add some more extra data, like new trips he made or create a new album containing all the pictures he made during his trip. Each user can follow or unfollow the other users.",
                    tools: [
                        "Sass",
                        "NodeJS",
                        "React",
                        "ThreeJS",
                        "Redux",
                        "Multer",
                        "GoogleClouStorage",
                        "MongoDB",
                    ],
                    code_link:
                        "https://github.com/HadrienSmet/travel-app-client",
                    code_server_link:
                        "https://github.com/HadrienSmet/travel-app-server",
                    link: "https://travel-app-client.netlify.app/",
                },
                {
                    name: "Tinyclip - Third project on my own (the second is the portfolio)",
                    images: [
                        "tinyclip.webp",
                        "tinyclip-snakepage.webp",
                        "tinyclip-pongpage.webp",
                        "tinyclip-tetrispage.webp",
                        "tinyclip-flappypage.webp",
                    ],
                    legends: [
                        "Home Page",
                        "Snake",
                        "Pong",
                        "Tetris",
                        "Flappy Bird",
                    ],
                    image_link: "tinyclip-square.webp",
                    description:
                        "In order to improve my skills in programming I coded a few small games. And I created a website to gather them. I called it tinyclip in memory of the website called miniclip wich stole a lot of hours to my youth. This website is only available on desktop version for now. Even if the home page is responsive, you can not play yet with your phone or tablet!",
                    tools: ["Sass", "React", "TypeScript"],
                    code_link: "https://github.com/HadrienSmet/Tinyclip",
                    link: "https://hs-tinyclip.netlify.app/",
                },
                {
                    name: "Cloned Gartic Phone, Fourth project on my own",
                    images: [
                        "cloned-home-page.webp",
                        "cloned-room-page.webp",
                        "cloned-canvas-page.webp",
                        "cloned-results-page.webp",
                    ],
                    legends: [
                        "Home Page",
                        "Room Page",
                        "Game page (drawing round)",
                        "Results Page",
                    ],
                    image_link: "cloned-square.webp",
                    description:
                        "I wanted to learn more about web sockets and I wanted to work based on templates made by a professional so I choose to clone famous web game Gartic Phone. It seamed me that it was a good project to challenge myself. Here is the version I ended up with. The responsive is made but you need a mouse to be able to play!! There is only one tool and one mode to play",
                    tools: [
                        "NextJS",
                        "React",
                        "TypeScript",
                        "Socket.IO",
                        "NodeJS",
                    ],
                    code_link: "https://github.com/HadrienSmet/gartic-clone",
                    code_server_link:
                        "https://github.com/HadrienSmet/gartic-clone-server",
                    link: "https://hs-gartic-clone.netlify.app",
                },
            ],
        });
    }
};

seedDataBase()
    .catch((error) => {
        console.error(
            "Erreur lors de l'initialisation de la base de données : ",
            error
        );
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

// async function removeDuplicateProjects() {
//     try {
//         await prisma.$executeRaw`
//         DELETE FROM "public"."Projects"
//         WHERE id NOT IN (
//           SELECT MIN(id)
//           FROM "public"."Projects"
//           GROUP BY name
//           HAVING COUNT(*) > 1
//         );
//       `;

//         console.log("Suppression des doublons terminée avec succès !");
//     } catch (error) {
//         console.error(
//             "Une erreur s'est produite lors de la suppression des doublons :",
//             error
//         );
//     } finally {
//         await prisma.$disconnect();
//     }
// }
// removeDuplicateProjects().catch((error) => {
//     console.error(
//         "Erreur lors de l'initialisation de la base de données : ",
//         error
//     );
// });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
