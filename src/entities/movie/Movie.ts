import { Actor } from "../actor/Actor";
import { Director } from "../director/Director";
import { Genre } from "../genre/Genre";
import { Writer } from "../writer/Writer";

class Movie {
    private _id!: string;
    public get id(): string {
        return this._id;
    }
    public set id(val: string) {
        this._id = val;
    }

    private _imdb_id!: string;
    public get imdb_id(): string {
        return this._imdb_id;
    }
    public set imdb_id(val: string) {
        this._imdb_id = val;
    }

    private _title!: string;
    public get title(): string {
        return this._title;
    }
    public set title(val: string) {
        this._title = val;
    }

    private _year!: number;
    public get year(): number {
        return this._year;
    }
    public set year(val: number) {
        this._year = val;
    }

    private _imdbRating!: number;
    public get imdbRating(): number {
        return this._imdbRating;
    }
    public set imdbRating(val: number) {
        this._imdbRating = val;
    }

    private _youchooseRating!: number;
    public get youchooseRating(): number {
        return this._youchooseRating;
    }
    public set youchooseRating(val: number) {
        this._youchooseRating = val;
    }

    private _poster!: string;
    public get poster(): string {
        return this._poster;
    }
    public set poster(val: string) {
        this._poster = val;
    }

    private _actors!: Actor[];
    public get actors(): Actor[] {
        return this._actors;
    }
    public set actors(val: Actor[]) {
        this._actors = val;
    }

    private _writers!: Writer[];
    public get writers(): Writer[] {
        return this._writers;
    }
    public set writers(val: Writer[]) {
        this._writers = val;
    }

    private _directors!: Director[];
    public get directors(): Director[] {
        return this._directors;
    }
    public set directors(val: Director[]) {
        this._directors = val;
    }

    private _genres!: Genre[];
    public get genres(): Genre[] {
        return this._genres;
    }
    public set genres(val: Genre[]) {
        this._genres = val;
    }

    constructor(
        id_: string,
        imdb_id_: string,
        title_: string,
        year_: number,
        imdbRating_: number,
        youchooseRating_: number,
        poster_: string,
        actors_: Actor[],
        writers_: Writer[],
        directors_: Director[],
        genres_: Genre[]
    ) {
        this.id = id_;
        this.imdb_id = imdb_id_;
        this.title = title_;
        this.year = year_;
        this.imdbRating = imdbRating_;
        this.youchooseRating = youchooseRating_;
        this.poster = poster_;
        this.actors = actors_;
        this.writers = writers_;
        this.directors = directors_;
        this.genres = genres_;
    }
}

export { Movie };
