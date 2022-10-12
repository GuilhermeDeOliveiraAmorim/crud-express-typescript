import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class GetListController {
    async handle(request: Request, response: Response) {
        const { list_id } = request.body;

        const list = await prismaClient.list.findUnique({
            where: {
                id: list_id,
            },
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

        return response.json(list);
    }
}

export { GetListController };
