/*
  Warnings:

  - Added the required column `code_link` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_link` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "code_link" TEXT NOT NULL,
ADD COLUMN     "code_server_link" TEXT,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "image_link" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "legends" TEXT[],
ADD COLUMN     "link" TEXT,
ADD COLUMN     "tools" TEXT[];
