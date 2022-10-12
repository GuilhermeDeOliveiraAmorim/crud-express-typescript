import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class UpdateYouChooseRating {
    async handle(request: Request, response: Response) {
        const { movie_id } = request.body;

        const movie = await prismaClient.movie.findUnique({
            where: {
                id: movie_id,
            },
        });

        var moreClick: number | null = 0;
        var totalClicks: number | null = 0;
        var youChooseRating: number | null = 0;

        const aggregations = await prismaClient.movie.aggregate({
            _sum: {
                movie_clicked: true,
            },
        });

        if (movie?.movie_clicked !== undefined) {
            moreClick = movie?.movie_clicked + 1;
            totalClicks = aggregations._sum.movie_clicked;

            if (totalClicks !== null) {
                youChooseRating = (moreClick / totalClicks) * 100;
            }
        }

        const upMovie = await prismaClient.movie.update({
            where: {
                id: movie_id,
            },
            data: {
                movie_clicked: moreClick,
                youchooseRating: youChooseRating,
            },
        });

        return response.json(upMovie);
    }
}

export { UpdateYouChooseRating };
