class Director {
    private _id!: string;
    public get id(): string {
        return this._id;
    }
    public set id(val: string) {
        this._id = val;
    }

    private _id_imdb_director!: string;
    public get id_imdb_director(): string {
        return this._id_imdb_director;
    }
    public set id_imdb_director(val: string) {
        this._id_imdb_director = val;
    }

    private _name!: string;
    public get name(): string {
        return this._name;
    }
    public set name(val: string) {
        this._name = val;
    }

    private _headshot!: string;
    public get headshot(): string {
        return this._headshot;
    }
    public set headshot(val: string) {
        this._headshot = val;
    }

    constructor(
        id_: string,
        id_imdb_director_: string,
        name_: string,
        headshot_: string
    ) {
        this.id = id_;
        this.id_imdb_director = id_imdb_director_;
        this.name = name_;
        this.headshot = headshot_;
    }
}

export { Director };
