import { Router } from "express";
import {
  createAdvertController,
  deleteAdvertController,
  listAdvertbyIdController,
  listAllAdvertsController,
  updateAdvertbyIdController,
} from "../controllers/adverts.controllers";
import ensureTokenExistis from "../middlewares/ensuretokenexistis.middleware";
import checkRequestBody from "../middlewares/checkRequestBody.middleware";
import {
  advertSchemaRequest,
  updateAdvertSchema,
} from "../schemas/adverts.schemas";
import checkParameterAdvertId from "../middlewares/checkParameterAdvertId.middleware";

const advertsRouter = Router();

advertsRouter.post(
  "",
  checkRequestBody(advertSchemaRequest),
  ensureTokenExistis,
  createAdvertController
);

advertsRouter.get("", listAllAdvertsController);

advertsRouter.get("/:id", checkParameterAdvertId, listAdvertbyIdController);

advertsRouter.patch(
  "/:id",
  ensureTokenExistis,
  checkRequestBody(updateAdvertSchema),
  checkParameterAdvertId,
  updateAdvertbyIdController
);

advertsRouter.delete(
  "/:id",
  ensureTokenExistis,
  checkParameterAdvertId,
  checkParameterAdvertId,
  deleteAdvertController
);

export default advertsRouter;
