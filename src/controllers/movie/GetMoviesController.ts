import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class GetMoviesController {
    async handle(request: Request, response: Response) {
        const movie = await prismaClient.movie.findMany({
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

export { GetMoviesController };
