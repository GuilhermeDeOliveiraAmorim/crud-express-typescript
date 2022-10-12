import { Movie } from "../movie/Movie";
import { Tag } from "../tag/Tag";
import { User } from "../user/User";

class List {
    name: string;
    headshot!: string;
    user: User;
    movies: Movie[];
    tags: Tag[];

    constructor(name: string, headshot: string, user: User) {
        this.name = name;
        this.headshot = headshot;
        this.user = user;
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
