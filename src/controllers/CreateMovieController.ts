import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";
import { Actor } from "../entities/actor/Actor";

class CreateMovieController {
    async handle(request: Request, response: Response) {
        const {
            imdb_id,
            imdbRating,
            youchooseRating,
            title,
            year,
            poster,
            actor_id,
            id_diretor,
            id_writer,
            id_genre,
        } = request.body;

        const movie = await prismaClient.movie.create({
            data: {
                imdb_id: imdb_id,
                imdbRating: imdbRating,
                youchooseRating: youchooseRating,
                title: title,
                year: year,
                poster: poster,
                actors: {
                    create: [{ actor_id: actor_id }],
                },
                directors: {
                    create: [{ director_id: id_diretor }],
                },
                genres: {
                    create: [{ genre_id: id_genre }],
                },
                writers: {
                    create: [{ writer_id: id_writer }],
                },
            },
        });

        return response.json(movie);
    }
}

export { CreateMovieController };
