class Movie {
    imdb_id: string;
    title: string;
    year: number;
    imdbRating: number;
    youchooseRating: number;
    poster: string;

    constructor(
        imdb_id: string,
        title: string,
        year: number,
        imdbRating: number,
        youchooseRating: number,
        poster: string
    ) {
        this.imdb_id = imdb_id;
        this.title = title;
        this.year = year;
        this.imdbRating = imdbRating;
        this.youchooseRating = youchooseRating;
        this.poster = poster;
    }

    getMovie() {
        return {
            imdb_id: this.imdb_id,
            title: this.title,
            year: this.year,
            imdbRating: this.imdbRating,
            youchooseRating: this.youchooseRating,
            poster: this.poster,
        };
    }
}

export { Movie };
