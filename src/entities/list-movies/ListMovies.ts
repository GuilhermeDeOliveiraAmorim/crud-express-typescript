import { Movie } from "../movie/Movie";

class ListMovies {
    movies: Movie[];

    constructor() {
        this.movies = [];
    }

    addMovie(movie: Movie) {
        this.movies.push(movie);
    }

    getMovies(): Movie[] {
        return this.movies;
    }
}

export { ListMovies };
