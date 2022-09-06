/*
  Warnings:

  - Made the column `movie_id` on table `actor_in_movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `actor_id` on table `actor_in_movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_imdb_actor` on table `actors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `actors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `headshot` on table `actors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `movie_id` on table `director_in_movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `director_id` on table `director_in_movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_imdb_director` on table `directors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `directors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `headshot` on table `directors` required. This step will fail if there are existing NULL values in that column.
  - Made the column `movie_id` on table `genre_in_movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `genre_id` on table `genre_in_movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `genres` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imdb_id` on table `movies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `movies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `year` on table `movies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `imdbRating` on table `movies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `youchooseRating` on table `movies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `poster` on table `movies` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `movie_id` on table `writer_in_movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `writer_id` on table `writer_in_movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `id_imdb_writer` on table `writers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `writers` required. This step will fail if there are existing NULL values in that column.
  - Made the column `headshot` on table `writers` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "actor_in_movie" DROP CONSTRAINT "actor_in_movie_actor_id_fkey";

-- DropForeignKey
ALTER TABLE "actor_in_movie" DROP CONSTRAINT "actor_in_movie_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "director_in_movie" DROP CONSTRAINT "director_in_movie_director_id_fkey";

-- DropForeignKey
ALTER TABLE "director_in_movie" DROP CONSTRAINT "director_in_movie_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "genre_in_movie" DROP CONSTRAINT "genre_in_movie_genre_id_fkey";

-- DropForeignKey
ALTER TABLE "genre_in_movie" DROP CONSTRAINT "genre_in_movie_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "writer_in_movie" DROP CONSTRAINT "writer_in_movie_movie_id_fkey";

-- DropForeignKey
ALTER TABLE "writer_in_movie" DROP CONSTRAINT "writer_in_movie_writer_id_fkey";

-- AlterTable
ALTER TABLE "actor_in_movie" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "movie_id" SET NOT NULL,
ALTER COLUMN "actor_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "actors" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id_imdb_actor" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "headshot" SET NOT NULL;

-- AlterTable
ALTER TABLE "director_in_movie" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "movie_id" SET NOT NULL,
ALTER COLUMN "director_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "directors" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id_imdb_director" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "headshot" SET NOT NULL;

-- AlterTable
ALTER TABLE "genre_in_movie" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "movie_id" SET NOT NULL,
ALTER COLUMN "genre_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "genres" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "movies" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "imdb_id" SET NOT NULL,
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "year" SET NOT NULL,
ALTER COLUMN "imdbRating" SET NOT NULL,
ALTER COLUMN "youchooseRating" SET NOT NULL,
ALTER COLUMN "poster" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;

-- AlterTable
ALTER TABLE "writer_in_movie" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "movie_id" SET NOT NULL,
ALTER COLUMN "writer_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "writers" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id_imdb_writer" SET NOT NULL,
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "headshot" SET NOT NULL;

-- CreateTable
CREATE TABLE "lists" (
    "id" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,
    "headshot" VARCHAR NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movie_in_list" (
    "id" TEXT NOT NULL,
    "movie_id" TEXT NOT NULL,
    "list_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "movie_in_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag_in_list" (
    "id" TEXT NOT NULL,
    "tag_id" TEXT NOT NULL,
    "list_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tag_in_list_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lists_name_key" ON "lists"("name");

-- CreateIndex
CREATE INDEX "ix_lists_id" ON "lists"("id");

-- CreateIndex
CREATE INDEX "ix_movie_in_list_id" ON "movie_in_list"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE INDEX "ix_tag_in_list_id" ON "tag_in_list"("id");

-- AddForeignKey
ALTER TABLE "actor_in_movie" ADD CONSTRAINT "actor_in_movie_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "actors"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "actor_in_movie" ADD CONSTRAINT "actor_in_movie_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "director_in_movie" ADD CONSTRAINT "director_in_movie_director_id_fkey" FOREIGN KEY ("director_id") REFERENCES "directors"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "director_in_movie" ADD CONSTRAINT "director_in_movie_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "genre_in_movie" ADD CONSTRAINT "genre_in_movie_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "genre_in_movie" ADD CONSTRAINT "genre_in_movie_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "writer_in_movie" ADD CONSTRAINT "writer_in_movie_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "writer_in_movie" ADD CONSTRAINT "writer_in_movie_writer_id_fkey" FOREIGN KEY ("writer_id") REFERENCES "writers"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "lists" ADD CONSTRAINT "lists_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "movie_in_list" ADD CONSTRAINT "movie_in_list_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "movie_in_list" ADD CONSTRAINT "movie_in_list_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "lists"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tag_in_list" ADD CONSTRAINT "tag_in_list_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tag_in_list" ADD CONSTRAINT "tag_in_list_list_id_fkey" FOREIGN KEY ("list_id") REFERENCES "lists"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;
