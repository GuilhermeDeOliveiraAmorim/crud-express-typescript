import express, { query, Request } from "express";
import { router } from "./routers";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(router);

export default app;
