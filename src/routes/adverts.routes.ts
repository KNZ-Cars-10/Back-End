import { Router } from "express";
import {
  createAdvertController,
  listAdvertbyIdController,
  listAllAdvertsController,
} from "../controllers/adverts.controllers";
import ensureTokenExistis from "../middlewares/ensuretokenexistis.middleware";
import checkRequestBody from "../middlewares/checkRequestBody.middleware";
import { advertSchemaRequest } from "../schemas/adverts.schemas";
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

export default advertsRouter;
