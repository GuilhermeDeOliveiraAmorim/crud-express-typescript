import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class CreateActorController {
    async handle(request: Request, response: Response) {
        const { id_imdb_actor, name, headshot } = request.body;

        const actor = await prismaClient.actor.create({
            data: {
                id_imdb_actor: id_imdb_actor,
                name: name,
                headshot: headshot,
            },
        });

        return response.json(actor);
    }
}

export { CreateActorController };
