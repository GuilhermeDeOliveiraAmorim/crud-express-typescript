import express, { query } from "express";
import { User } from "./entities/user/User";

const server = express();

server.get("/", (request, response) => {
    const firstName = request.query.firstname;
    const lastName = request.query.lastname;

    const user = new User(firstName, lastName);

    return response.send(
        `Hello, ${user.getFirstName()} ${user.getLastName()}!`
    );
});

export default server;
