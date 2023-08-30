import { Router } from "express";
import {
  checkUserEmailController,
  createUserController,
  deleteUserController,
  listAllUserController,
  listUserbyIdController,
  updateUserController,
} from "../controllers/users.controllers";
import checkRequestBody from "../middlewares/checkRequestBody.middleware";
import { updateUserSchema, userSchemaRegister } from "../schemas/users.schemas";
import checkEmailUser from "../middlewares/checkEmailUser.middleware";
import checkParameterUserId from "../middlewares/checkParameterUserId.middleware";
import checkOwnerUser from "../middlewares/checkOwnerUser.middleware";
import ensureTokenExistis from "../middlewares/ensureTokenExistis.middleware";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  checkRequestBody(userSchemaRegister),
  checkEmailUser,
  createUserController
);

usersRoutes.get("", listAllUserController);

usersRoutes.get("/:userId", checkParameterUserId, listUserbyIdController);

usersRoutes.patch(
  "/:userId",
  ensureTokenExistis,
  checkParameterUserId,
  checkEmailUser,
  checkOwnerUser,
  checkRequestBody(updateUserSchema),
  updateUserController
);

usersRoutes.delete(
  "/:userId",
  ensureTokenExistis,
  checkParameterUserId,
  checkOwnerUser,
  deleteUserController
);

usersRoutes.get("/checkEmail/:email", checkUserEmailController);

export default usersRoutes;
