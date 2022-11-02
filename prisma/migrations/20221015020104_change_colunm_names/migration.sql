/*
  Warnings:

  - Made the column `imdb_rating` on table `movies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `you_choose_rating` on table `movies` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "movies" ALTER COLUMN "imdb_rating" SET NOT NULL,
ALTER COLUMN "you_choose_rating" SET NOT NULL;
