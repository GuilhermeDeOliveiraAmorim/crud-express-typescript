import express, { query } from "express";
import { User } from "./entities/user/User";
import { addUser } from "./entities/user/UserController";

const server = express();

server.get("/", (request, response) => {
    const firstName = request.query.firstname;
    const lastName = request.query.lastname;
    const email = request.query.email;
    const password = request.query.password;

    const user = new User(firstName, lastName, email, password);

    return response.send(addUser(user));
});

export default server;
