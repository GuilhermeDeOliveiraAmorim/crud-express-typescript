/*
  Warnings:

  - A unique constraint covering the columns `[id_imdb_actor]` on the table `actors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_imdb_director]` on the table `directors` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imdb_id]` on the table `movies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_imdb_writer]` on the table `writers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "actors_id_imdb_actor_key" ON "actors"("id_imdb_actor");

-- CreateIndex
CREATE UNIQUE INDEX "directors_id_imdb_director_key" ON "directors"("id_imdb_director");

-- CreateIndex
CREATE UNIQUE INDEX "movies_imdb_id_key" ON "movies"("imdb_id");

-- CreateIndex
CREATE UNIQUE INDEX "writers_id_imdb_writer_key" ON "writers"("id_imdb_writer");
