import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class GetMovieController {
    async handle(request: Request, response: Response) {
        const { movie_id } = request.body;

        const movie = await prismaClient.movie.findUnique({
            where: {
                id: movie_id,
            },
            include: {
                actors: {
                    include: {
                        actors: true,
                    },
                },
                directors: {
                    include: {
                        directors: true,
                    },
                },
                genres: {
                    include: {
                        genres: true,
                    },
                },
                writers: {
                    include: {
                        writers: true,
                    },
                },
            },
        });

        return response.json(movie);
    }
}

export { GetMovieController };
