import { Movie } from "../movie/Movie";
import { ListMovies } from "./ListMovies";

test("Deve adicionar um filme a uma lista", () => {
    const listMovies = new ListMovies();
    listMovies.addMovie(
        new Movie(
            "tt11866324",
            "Prey",
            2022,
            7.2,
            0.0,
            "https://m.media-amazon.com/images/M/MV5BYjcxMzI2OGYtNWY5Yi00YTFmLTgwZmMtYmJiYWZhNzcwZTI0XkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_QL75_UX380_CR0,4,380,562_.jpg"
        )
    );
    const arrMoviesInList = listMovies.getMovies();

    expect(arrMoviesInList[0]).toBeInstanceOf(Movie);
});

test("Deve criar uma lista de filmes", () => {
    const listMovies = new ListMovies();
    listMovies.addMovie(
        new Movie(
            "tt11866324",
            "Prey",
            2022,
            7.2,
            0.0,
            "https://m.media-amazon.com/images/M/MV5BYjcxMzI2OGYtNWY5Yi00YTFmLTgwZmMtYmJiYWZhNzcwZTI0XkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_QL75_UX380_CR0,4,380,562_.jpg"
        )
    );
    listMovies.addMovie(
        new Movie(
            "tt11866324",
            "Prey",
            2022,
            7.2,
            0.0,
            "https://m.media-amazon.com/images/M/MV5BYjcxMzI2OGYtNWY5Yi00YTFmLTgwZmMtYmJiYWZhNzcwZTI0XkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_QL75_UX380_CR0,4,380,562_.jpg"
        )
    );
    listMovies.addMovie(
        new Movie(
            "tt11866324",
            "Prey",
            2022,
            7.2,
            0.0,
            "https://m.media-amazon.com/images/M/MV5BYjcxMzI2OGYtNWY5Yi00YTFmLTgwZmMtYmJiYWZhNzcwZTI0XkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_QL75_UX380_CR0,4,380,562_.jpg"
        )
    );
    const arrMoviesInList = listMovies.getMovies();

    expect(arrMoviesInList).toBeInstanceOf(Array);
});
