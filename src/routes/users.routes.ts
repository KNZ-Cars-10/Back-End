import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listAllUserController,
  listUserbyIdController,
  updateAvatarUserController,
  updateUserController,
} from "../controllers/users.controllers";
import checkRequestBody from "../middlewares/checkRequestBody.middleware";
import { updateUserSchema, userSchemaRegister } from "../schemas/users.schemas";
import checkEmailUser from "../middlewares/checkEmailUser.middleware";
import ensureTokenExistis from "../middlewares/ensureTokenExistis.middleware";
import checkParameterUserId from "../middlewares/checkParameterUserId.middleware";
import checkOwnerUser from "../middlewares/checkOwnerUser.middleware";
import multer from "multer";

const usersRoutes: Router = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

usersRoutes.post(
  "",
  checkRequestBody(userSchemaRegister),
  checkEmailUser,
  createUserController
);

usersRoutes.get("", ensureTokenExistis, listAllUserController);

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

usersRoutes.patch(
  "/avatar/:userId",
  upload.single("image"),
  ensureTokenExistis,
  checkParameterUserId,
  checkOwnerUser,
  // checkRequestBody(updateUserSchema),
  updateAvatarUserController
);

usersRoutes.delete(
  "/:userId",
  ensureTokenExistis,
  checkParameterUserId,
  checkOwnerUser,
  deleteUserController
);

export default usersRoutes;
