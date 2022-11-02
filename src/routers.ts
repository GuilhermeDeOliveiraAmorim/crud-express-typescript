import { Router } from "express";

import { CreateActorController } from "./controllers/actor/CreateActorController";

import { CreateChooserController } from "./controllers/chooser/CreateChooserController";

import { CreateDirectorController } from "./controllers/director/CreateDirectorController";

import { CreateGenreController } from "./controllers/genre/CreateGenreController";

import { CreateListController } from "./controllers/list/CreateListController";
import { GetListsController } from "./controllers/list/GetListsController";
import { GetListController } from "./controllers/list/GetListController";

import { CreateMovieController } from "./controllers/movie/CreateMovieController";
import { GetMoviesController } from "./controllers/movie/GetMoviesController";
import { GetMovieController } from "./controllers/movie/GetMovieController";
import { UpdateYouChooseRating } from "./controllers/movie/UpdateYouChooseRating";

import { CreateWriterController } from "./controllers/writer/CreateWriterController";
import { CreateTagController } from "./controllers/tag/CreateTagController";
import { GetTwoMoviesController } from "./controllers/movie/GetTwoMoviesController";

const router = Router();

const createActor = new CreateActorController();

const createChooser = new CreateChooserController();

const createDirector = new CreateDirectorController();

const createGenre = new CreateGenreController();

const createList = new CreateListController();
const getLists = new GetListsController();
const getList = new GetListController();

const createMovie = new CreateMovieController();
const getMovies = new GetMoviesController();
const getMovie = new GetMovieController();
const getTwoMovies = new GetTwoMoviesController();
const updateYouChooseRating = new UpdateYouChooseRating();

const createTag = new CreateTagController();

const createWriter = new CreateWriterController();

router.post("/actor", createActor.handle);

router.post("/chooser", createChooser.handle);

router.post("/director", createDirector.handle);

router.post("/genre", createGenre.handle);

router.post("/list", createList.handle);
router.get("/list", getLists.handle);
router.get("/list/:list_id", getList.handle);

router.post("/tag", createTag.handle);

router.post("/movie", createMovie.handle);
router.get("/movie", getMovies.handle);
router.get("/movie/:movie_id", getMovie.handle);
router.patch("/movie/rating/:movie_id", updateYouChooseRating.handle);
router.get("/movie/two", getTwoMovies.handle);

router.post("/writer", createWriter.handle);

export { router };
