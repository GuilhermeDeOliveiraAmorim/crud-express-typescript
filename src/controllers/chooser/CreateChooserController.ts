import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class CreateChooserController {
    async handle(request: Request, response: Response) {
        const { email, chooser_name, password } = request.body;

        const actor = await prismaClient.chooser.create({
            data: {
                email: email,
                chooser_name: chooser_name,
                password: password,
            },
        });

        return response.json(actor);
    }
}

export { CreateChooserController };
