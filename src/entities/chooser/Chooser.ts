class Chooser {
    private _id!: string;
    public get id(): string {
        return this._id;
    }
    public set id(val: string) {
        this._id = val;
    }

    private _email!: string;
    public get email(): string {
        return this._email;
    }
    public set email(val: string) {
        this._email = val;
    }

    private _password!: string;
    public get password(): string {
        return this._password;
    }
    public set password(val: string) {
        this._password = val;
    }

    constructor(id_: string, email_: string, password_: string) {
        this.id = id_;
        this.email = email_;
        this.password = password_;
    }
}

export { Chooser };
