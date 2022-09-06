import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

class CreateDirectorController {
    async handle(request: Request, response: Response) {
        const { id_imdb_director, name, headshot } = request.body;

        const director = await prismaClient.director.create({
            data: {
                id_imdb_director: id_imdb_director,
                name: name,
                headshot: headshot,
            },
        });

        return response.json(director);
    }
}

export { CreateDirectorController };
