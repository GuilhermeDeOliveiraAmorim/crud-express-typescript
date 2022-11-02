/*
  Warnings:

  - You are about to drop the column `imdbRating` on the `movies` table. All the data in the column will be lost.
  - You are about to drop the column `youchooseRating` on the `movies` table. All the data in the column will be lost.
  - Added the required column `imdb_rating` to the `movies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `you_choose_rating` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "imdbRating",
DROP COLUMN "youchooseRating",
ADD COLUMN     "imdb_rating" DOUBLE PRECISION NULL,
ADD COLUMN     "you_choose_rating" DOUBLE PRECISION NULL;
