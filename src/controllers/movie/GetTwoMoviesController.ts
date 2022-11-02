import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class GetTwoMoviesController {
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

        console.log(Math.floor(Math.random() * movie.length));

        return response.json(movie);
    }
}

export { GetTwoMoviesController };
