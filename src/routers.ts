import { Router } from "express";

import { CreateActorController } from "./controllers/actor/CreateActorController";

import { CreateDirectorController } from "./controllers/director/CreateDirectorController";

import { CreateGenreController } from "./controllers/genre/CreateGenreController";

import { CreateListController } from "./controllers/list/CreateListController";

import { CreateMovieController } from "./controllers/movie/CreateMovieController";
import { GetMoviesController } from "./controllers/movie/GetMoviesController";
import { GetMovieController } from "./controllers/movie/GetMovieController";

import { CreateWriterController } from "./controllers/writer/CreateWriterController";

const router = Router();

const createActor = new CreateActorController();

const createDirector = new CreateDirectorController();

const createGenre = new CreateGenreController();

const createWriter = new CreateWriterController();

const createMovie = new CreateMovieController();
const getMovies = new GetMoviesController();
const getMovie = new GetMovieController();

const createList = new CreateListController();

router.post("/actor", createActor.handle);

router.post("/director", createDirector.handle);

router.post("/genre", createGenre.handle);

router.post("/writer", createWriter.handle);

router.post("/movie", createMovie.handle);
router.get("/movie", getMovies.handle);
router.get("/movie/:movie_id", getMovie.handle);

router.post("/list", createList.handle);

export { router };
