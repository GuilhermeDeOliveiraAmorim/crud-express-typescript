import { Movie } from "./Movie";

test("Deve criar um filme", () => {
    const movie = new Movie(
        "tt11866324",
        "Prey",
        2022,
        7.2,
        0.0,
        "https://m.media-amazon.com/images/M/MV5BYjcxMzI2OGYtNWY5Yi00YTFmLTgwZmMtYmJiYWZhNzcwZTI0XkEyXkFqcGdeQXVyMjAwNzczNTU@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    );
    expect(movie.getMovie()).toBe({
        imdb_id: "",
        title: "",
        year: 0,
        imdbRating: 0,
        youchooseRating: 0,
        poster: "string",
    });
});
