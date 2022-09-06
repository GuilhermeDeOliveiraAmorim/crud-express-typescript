import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

class CreateGenreController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const genre = await prismaClient.genre.create({
            data: {
                name: name.toLowerCase(),
            },
        });

        return response.json(genre);
    }
}

export { CreateGenreController };
