import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listAllUserController,
  listUserbyIdController,
  updateUserController,
} from "../controllers/users.controllers";
import checkRequestBody from "../middlewares/checkRequestBody.middleware";
import { updateUserSchema, userSchemaRegister } from "../schemas/users.schemas";
import checkEmailUser from "../middlewares/checkEmailUser.middleware";
import ensureTokenExistis from "../middlewares/ensuretokenexistis.middleware";
import checkParameterUserId from "../middlewares/checkParameterUserId.middleware";
import checkOwnerUser from "../middlewares/checkOwnerUser.middleware";

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

usersRoutes.patch(
  "/:id",
  ensureTokenExistis,
  checkParameterUserId,
  checkEmailUser,
  checkOwnerUser,
  checkRequestBody(updateUserSchema),
  updateUserController
);

usersRoutes.delete(
  "/:id",
  ensureTokenExistis,
  checkParameterUserId,
  checkOwnerUser,
  deleteUserController
);

export default usersRoutes;
