class User {
    private firstName: any;
    private lastName: any;

    constructor(firstName: any, lastName: any) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFirstName() {
        return this.firstName;
    }

    public getLastName() {
        return this.lastName;
    }

    public getFullName() {
        return this.getFirstName() + " " + this.getLastName();
    }
}

export { User };
