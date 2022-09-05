-- CreateTable
CREATE TABLE "actor_in_movie" (
    "id" TEXT NOT NULL,
    "movie_id" TEXT,
    "actor_id" TEXT,

    CONSTRAINT "actor_in_movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "actors" (
    "id" TEXT NOT NULL,
    "id_imdb_actor" VARCHAR,
    "name" VARCHAR,
    "headshot" VARCHAR,

    CONSTRAINT "actors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "director_in_movie" (
    "id" TEXT NOT NULL,
    "movie_id" TEXT,
    "director_id" TEXT,

    CONSTRAINT "director_in_movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "directors" (
    "id" TEXT NOT NULL,
    "id_imdb_director" VARCHAR,
    "name" VARCHAR,
    "headshot" VARCHAR,

    CONSTRAINT "directors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genre_in_movie" (
    "id" TEXT NOT NULL,
    "movie_id" TEXT,
    "genre_id" TEXT,

    CONSTRAINT "genre_in_movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "genres" (
    "id" TEXT NOT NULL,
    "name" VARCHAR,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "movies" (
    "id" TEXT NOT NULL,
    "imdb_id" VARCHAR,
    "title" VARCHAR,
    "year" INTEGER,
    "imdbRating" DOUBLE PRECISION,
    "youchooseRating" DOUBLE PRECISION,
    "poster" VARCHAR,

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" VARCHAR,
    "password" VARCHAR,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "writer_in_movie" (
    "id" TEXT NOT NULL,
    "movie_id" TEXT,
    "writer_id" TEXT,

    CONSTRAINT "writer_in_movie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "writers" (
    "id" TEXT NOT NULL,
    "id_imdb_writer" VARCHAR,
    "name" VARCHAR,
    "headshot" VARCHAR,

    CONSTRAINT "writers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ix_actor_in_movie_id" ON "actor_in_movie"("id");

-- CreateIndex
CREATE INDEX "ix_actors_id" ON "actors"("id");

-- CreateIndex
CREATE INDEX "ix_director_in_movie_id" ON "director_in_movie"("id");

-- CreateIndex
CREATE INDEX "ix_directors_id" ON "directors"("id");

-- CreateIndex
CREATE INDEX "ix_genre_in_movie_id" ON "genre_in_movie"("id");

-- CreateIndex
CREATE INDEX "ix_genres_id" ON "genres"("id");

-- CreateIndex
CREATE INDEX "ix_movies_id" ON "movies"("id");

-- CreateIndex
CREATE INDEX "ix_users_id" ON "users"("id");

-- CreateIndex
CREATE INDEX "ix_writer_in_movie_id" ON "writer_in_movie"("id");

-- CreateIndex
CREATE INDEX "ix_writers_id" ON "writers"("id");

-- AddForeignKey
ALTER TABLE "actor_in_movie" ADD CONSTRAINT "actor_in_movie_actor_id_fkey" FOREIGN KEY ("actor_id") REFERENCES "actors"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "actor_in_movie" ADD CONSTRAINT "actor_in_movie_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "director_in_movie" ADD CONSTRAINT "director_in_movie_director_id_fkey" FOREIGN KEY ("director_id") REFERENCES "directors"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "director_in_movie" ADD CONSTRAINT "director_in_movie_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "genre_in_movie" ADD CONSTRAINT "genre_in_movie_genre_id_fkey" FOREIGN KEY ("genre_id") REFERENCES "genres"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "genre_in_movie" ADD CONSTRAINT "genre_in_movie_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "writer_in_movie" ADD CONSTRAINT "writer_in_movie_movie_id_fkey" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "writer_in_movie" ADD CONSTRAINT "writer_in_movie_writer_id_fkey" FOREIGN KEY ("writer_id") REFERENCES "writers"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
