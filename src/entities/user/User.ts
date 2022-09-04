class User {
    private firstName: any;
    private lastName: any;
    private email: any;
    private password: any;

    constructor(firstName: any, lastName: any, email: any, password: any) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    public getFirstName() {
        return this.firstName;
    }

    public getLastName() {
        return this.lastName;
    }

    public getEmail() {
        return this.email;
    }

    public getPassword() {
        return this.password;
    }

    public getFullName() {
        return this.getFirstName() + " " + this.getLastName();
    }
}

export { User };
