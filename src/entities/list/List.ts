import { Movie } from "../movie/Movie";
import { Tag } from "../tag/Tag";
import { Chooser } from "../chooser/Chooser";

class List {
    name: string;
    headshot!: string;
    chooser: Chooser;
    movies: Movie[];
    tags: Tag[];

    constructor(name: string, headshot: string, chooser: Chooser) {
        this.name = name;
        this.headshot = headshot;
        this.chooser = chooser;
        this.movies = [];
        this.tags = [];
    }

    addMovie(movie: Movie) {
        this.movies.push(movie);
    }

    getMovies(): Movie[] {
        return this.movies;
    }

    addTag(tag: Tag) {
        this.tags.push(tag);
    }

    getTags(): Tag[] {
        return this.tags;
    }
}

export { List };
