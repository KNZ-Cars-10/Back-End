import { Router } from "express";
import {
  createAdvertController,
  deleteAdvertController,
  generateURLImage,
  listAdvertbyIdController,
  listAllAdvertsController,
  updateAdvertbyIdController,
} from "../controllers/adverts.controllers";
import ensureTokenExistis from "../middlewares/ensureTokenExistis.middleware";
import checkRequestBody from "../middlewares/checkRequestBody.middleware";
import {
  advertSchemaRequest,
  updateAdvertSchema,
} from "../schemas/adverts.schemas";
import checkParameterAdvertId from "../middlewares/checkParameterAdvertId.middleware";
import checkOwnerAdvert from "../middlewares/checkOwnerAdvert.middleware";
import multer from "multer";

const advertsRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

advertsRouter.post(
  "",
  checkRequestBody(advertSchemaRequest),
  ensureTokenExistis,
  createAdvertController
);

advertsRouter.get("", listAllAdvertsController);

advertsRouter.get(
  "/:advertId",
  checkParameterAdvertId,
  listAdvertbyIdController
);

advertsRouter.patch(
  "/:advertId",
  ensureTokenExistis,
  checkParameterAdvertId,
  checkRequestBody(updateAdvertSchema),
  checkOwnerAdvert,
  updateAdvertbyIdController
);

advertsRouter.delete(
  "/:advertId",
  ensureTokenExistis,
  checkParameterAdvertId,
  checkOwnerAdvert,
  deleteAdvertController
);

advertsRouter.post("/cover", upload.single("image"), generateURLImage);

export default advertsRouter;
