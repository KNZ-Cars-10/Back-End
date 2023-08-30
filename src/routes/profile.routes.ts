import { Router } from "express";
import checkParameterUserId from "../middlewares/checkParameterUserId.middleware";
import {
  deleteProfileController,
  listProfilebyIdController,
  updateProfileController,
} from "../controllers/profile.controllers";
import checkRequestBody from "../middlewares/checkRequestBody.middleware";
import { updateUserSchema } from "../schemas/users.schemas";
import checkEmailUser from "../middlewares/checkEmailUser.middleware";
import ensureTokenExistis from "../middlewares/ensureTokenExistis.middleware";

const profileRoutes: Router = Router();

profileRoutes.get(
  "",
  ensureTokenExistis,
  checkParameterUserId,
  listProfilebyIdController
);

profileRoutes.patch(
  "",
  ensureTokenExistis,
  checkParameterUserId,
  checkEmailUser,
  checkRequestBody(updateUserSchema),
  updateProfileController
);

profileRoutes.delete(
  "",
  ensureTokenExistis,
  checkParameterUserId,
  deleteProfileController
);

export default profileRoutes;
