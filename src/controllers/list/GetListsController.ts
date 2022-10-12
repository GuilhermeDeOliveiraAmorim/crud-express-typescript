import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class GetListsController {
    async handle(request: Request, response: Response) {
        const lists = await prismaClient.list.findMany({
            include: {
                chooser: true,
                movies: {
                    include: {
                        movies: true,
                    },
                },
                tags: {
                    include: {
                        tags: true,
                    },
                },
            },
        });

        return response.json(lists);
    }
}

export { GetListsController };
