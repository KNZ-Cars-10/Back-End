import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";
import { handleErrors } from "./error";
import cors from "cors";
import usersRoutes from "./routes/users.routes";
import loginRouter from "./routes/login.routes";
import advertsRouter from "./routes/adverts.routes";

const app: Application = express();

app.use(json());

app.use(express.json());

app.use(cors());

app.use("/users", usersRoutes);

app.use("/login", loginRouter);

app.use("/adverts", advertsRouter);

app.use(handleErrors);

export default app;
