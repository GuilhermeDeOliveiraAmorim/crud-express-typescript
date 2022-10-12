import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class CreateMovieController {
    async handle(request: Request, response: Response) {
        const {
            imdb_id,
            imdbRating,
            youchooseRating,
            title,
            year,
            poster,
            arrActors,
            arrDirectors,
            arrGenres,
            arrWriters,
        } = request.body;

        const movie = await prismaClient.movie.create({
            data: {
                imdb_id: imdb_id,
                imdbRating: imdbRating,
                youchooseRating: youchooseRating,
                title: title,
                year: year,
                poster: poster,
            },
        });

        const movie_id = movie.id;

        arrActors.map((actor: any) => {
            actor["movie_id"] = movie_id;
        });

        arrDirectors.map((director: any) => {
            director["movie_id"] = movie_id;
        });

        arrGenres.map((genre: any) => {
            genre["movie_id"] = movie_id;
        });

        arrWriters.map((writer: any) => {
            writer["movie_id"] = movie_id;
        });

        const createManyActorsInMovie =
            await prismaClient.actorInMovie.createMany({
                data: arrActors,
                skipDuplicates: true,
            });

        const createManyDirectorsInMovie =
            await prismaClient.directorInMovie.createMany({
                data: arrDirectors,
                skipDuplicates: true,
            });

        const createManyGenresInMovie =
            await prismaClient.genreInMovie.createMany({
                data: arrGenres,
                skipDuplicates: true,
            });

        const createManyWritersInMovie =
            await prismaClient.writerInMovie.createMany({
                data: arrWriters,
                skipDuplicates: true,
            });

        return response.json([
            movie,
            createManyActorsInMovie,
            createManyDirectorsInMovie,
            createManyGenresInMovie,
            createManyWritersInMovie,
        ]);
    }
}

export { CreateMovieController };
