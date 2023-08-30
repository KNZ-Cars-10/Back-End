import { Router } from "express";
import {
  resetPasswordController,
  sendTokenController,
} from "../controllers/recoverPassword.controller";
import checkRequestBody from "../middlewares/checkRequestBody.middleware";
import {
  emailSchema,
  resetPasswordSchema,
} from "../schemas/resetPassword.schemas";

const recoverPasswordRouter = Router();

recoverPasswordRouter.post(
  "/forgot-password",
  checkRequestBody(emailSchema),
  sendTokenController
);

recoverPasswordRouter.post(
  "/:token",
  checkRequestBody(resetPasswordSchema),
  resetPasswordController
);

export default recoverPasswordRouter;
