import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class UpdateYouChooseRating {
    async handle(request: Request, response: Response) {
        const { movie_id } = request.body;

        console.log(movie_id);

        const movie = await prismaClient.movie.findUnique({
            where: {
                id: movie_id,
            },
        });

        var moreClick = movie?.movie_clicked;

        if (moreClick !== undefined) {
            moreClick = moreClick + 1;
        }

        const upMovie = await prismaClient.movie.update({
            where: {
                id: movie_id,
            },
            data: {
                movie_clicked: moreClick,
            },
        });

        return response.json(upMovie);
    }
}

export { UpdateYouChooseRating };
