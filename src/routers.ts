import { Router } from "express";
import { CreateActorController } from "./controllers/CreateActorController";
import { CreateDirectorController } from "./controllers/CreateDirectorController";
import { CreateGenreController } from "./controllers/CreateGenreController";
import { CreateMovieController } from "./controllers/CreateMovieController";
import { CreateWriterController } from "./controllers/CreateWriterController";

const router = Router();

const createActor = new CreateActorController();
const createDirector = new CreateDirectorController();
const createGenre = new CreateGenreController();
const createWriter = new CreateWriterController();
const createMovie = new CreateMovieController();

router.post("/actor", createActor.handle);
router.post("/director", createDirector.handle);
router.post("/genre", createGenre.handle);
router.post("/writer", createWriter.handle);
router.post("/movie", createMovie.handle);

export { router };
