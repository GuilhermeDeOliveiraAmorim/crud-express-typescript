import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

class CreateListController {
    async handle(request: Request, response: Response) {
        const { name, headshot, chooser_id, arrTags, arrMovies } = request.body;

        const list = await prismaClient.list.create({
            data: {
                name: name,
                headshot: headshot,
                chooser_id: chooser_id,
            },
        });

        const list_id = list.id;

        arrTags.map((tag: any) => {
            tag["list_id"] = list_id;
        });

        arrMovies.map((movie: any) => {
            movie["list_id"] = list_id;
        });

        const createManyTagsInList = await prismaClient.tagInList.createMany({
            data: arrTags,
            skipDuplicates: true,
        });

        const createManyMoviesInList =
            await prismaClient.movieInList.createMany({
                data: arrMovies,
                skipDuplicates: true,
            });

        return response.json([
            list,
            createManyTagsInList,
            createManyMoviesInList,
        ]);
    }
}

export { CreateListController };
