import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class CreateListController {
    async handle(request: Request, response: Response) {
        const { name, headshot, user_id, movies, tags } = request.body;

        const movie = await prismaClient.list.create({
            data: {
                name: name,
                headshot: headshot,
                user_id: user_id,
                movies: {
                    createMany: movies,
                },
                // tags: {
                //     create: [{ tag_id: tags }],
                // },
            },
        });

        return response.json(movie);
    }
}

export { CreateListController };
