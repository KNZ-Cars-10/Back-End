import { Router } from "express";
import {
  createUserController,
  listAllUserController,
  listUserbyIdController,
} from "../controllers/users.controllers";
import checkRequestBody from "../middlewares/checkRequestBody.middleware";
import { userSchemaRegister } from "../schemas/users.schemas";
import checkEmailUser from "../middlewares/checkEmailUser.middleware";
import ensureTokenExistis from "../middlewares/ensuretokenexistis.middleware";
import checkParameterUserId from "../middlewares/checkParameterUserId.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  checkRequestBody(userSchemaRegister),
  checkEmailUser,
  createUserController
);

usersRoutes.get("", ensureTokenExistis, listAllUserController);

usersRoutes.get(
  "/:id",
  ensureTokenExistis,
  checkParameterUserId,
  listUserbyIdController
);

export default usersRoutes;
