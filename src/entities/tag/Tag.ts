class Tag {
    private _id!: string;
    public get id(): string {
        return this._id;
    }
    public set id(val: string) {
        this._id = val;
    }

    private _name!: string;
    public get name(): string {
        return this._name;
    }
    public set name(val: string) {
        this._name = val;
    }

    constructor(id_: string, name_: string) {
        this.id = id_;
        this.name = name_;
    }
}

export { Tag };
