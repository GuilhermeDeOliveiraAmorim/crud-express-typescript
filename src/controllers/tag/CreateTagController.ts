import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class CreateTagController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const tag = await prismaClient.tag.create({
            data: {
                name: name,
            },
        });

        return response.json(tag);
    }
}

export { CreateTagController };
