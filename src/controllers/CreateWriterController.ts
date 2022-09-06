import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

class CreateWriterController {
    async handle(request: Request, response: Response) {
        const { id_imdb_writer, name, headshot } = request.body;

        const writer = await prismaClient.writer.create({
            data: {
                id_imdb_writer: id_imdb_writer,
                name: name,
                headshot: headshot,
            },
        });

        return response.json(writer);
    }
}

export { CreateWriterController };
