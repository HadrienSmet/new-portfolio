/*
  Warnings:

  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Project";

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "images" TEXT[],
    "legends" TEXT[],
    "image_link" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tools" TEXT[],
    "code_link" TEXT NOT NULL,
    "code_server_link" TEXT,
    "link" TEXT,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
