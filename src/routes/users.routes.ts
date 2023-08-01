import { Router } from "express";
import { createUserController } from "../controllers/users.controllers";
import checkRequestBody from "../middlewares/checkRequestBody.middleware";
import { userSchemaRegister } from "../schemas/users.schemas";
import checkEmailUser from "../middlewares/checkEmailUser.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  checkRequestBody(userSchemaRegister),
  checkEmailUser,
  createUserController
);

export default usersRoutes;
