import "reflect-metadata";
import "express-async-errors";
import express, { Application, json } from "express";
import { handleErrors } from "./error";
import cors from "cors";
import nodemailer from "nodemailer";
import usersRoutes from "./routes/users.routes";
import loginRouter from "./routes/login.routes";
import advertsRouter from "./routes/adverts.routes";
import profileRoutes from "./routes/profile.routes";
import commentRoutes from "./routes/comments.routes";
import recoverPasswordRouter from "./routes/recoverPassword.routes";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();

app.use(json());

app.use(express.json());

app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.BASE_EMAIL!,
    pass: process.env.BASE_EMAIL_PASSWORD!,
  },
});

app.use("/users", usersRoutes);

app.use("/login", loginRouter);

app.use("/adverts", advertsRouter);

app.use("/profile", profileRoutes);

app.use("/comment", commentRoutes);

app.use("/recover-password", recoverPasswordRouter);

app.use(handleErrors);

export { app, transporter };
