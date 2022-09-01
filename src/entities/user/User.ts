class User {
    private firstName: any;
    private lastName: any;

    constructor(firstName: any, lastName: any) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFirstName() {
        return this.firstName;
    }

    getLastName() {
        return this.lastName;
    }
}

export { User };
