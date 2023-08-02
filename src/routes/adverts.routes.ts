import { Router } from "express";
import { createAdvertController } from "../controllers/adverts.controllers";
import ensureTokenExistis from "../middlewares/ensuretokenexistis.middleware";
import checkRequestBody from "../middlewares/checkRequestBody.middleware";
import { advertSchemaRequest } from "../schemas/adverts.schemas";

const advertsRouter = Router();

advertsRouter.post(
  "",
  checkRequestBody(advertSchemaRequest),
  ensureTokenExistis,
  createAdvertController
);

export default advertsRouter;
