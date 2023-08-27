import { Router } from "express";
import {
  resetPasswordController,
  resetTokenController,
} from "../controllers/recoverPassword.controller";

const recoverPasswordRouter = Router();

recoverPasswordRouter.post("/forgot-password", resetTokenController);

recoverPasswordRouter.post("/:token", resetPasswordController);

export default recoverPasswordRouter;
