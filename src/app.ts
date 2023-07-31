import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";
import { handleErrors } from "./error";
import cors from "cors";

const app: Application = express();

app.use(json());

app.use(express.json());

app.use(cors());

app.use(handleErrors);

export default app;
