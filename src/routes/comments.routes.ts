import { Router } from "express";
import ensureTokenExistis from "../middlewares/ensureTokenExistis.middleware";
import checkParameterUserId from "../middlewares/checkParameterUserId.middleware";
import checkRequestBody from "../middlewares/checkRequestBody.middleware";
import checkParameterCommentId from "../middlewares/checkParameterCommentId.middleware";
import {
  createCommentController,
  deleteCommentController,
  listAllCommentsController,
  listCommentbyIdController,
  updateCommentbyIdController,
} from "../controllers/comments.controllers";
import {
  commentSchemaRquest,
  commentsSchemaUpdate,
} from "../schemas/comments.schemas";
import checkParameterAdvertId from "../middlewares/checkParameterAdvertId.middleware";
import checkOwnerComment from "../middlewares/checkOwnerComment.middleware";

const commentRoutes: Router = Router();

commentRoutes.post(
  "/:advertId",
  ensureTokenExistis,
  checkParameterUserId,
  checkParameterAdvertId,
  checkRequestBody(commentSchemaRquest),
  createCommentController
);

commentRoutes.get("", listAllCommentsController);

commentRoutes.get(
  "/:commentId",
  checkParameterCommentId,
  listCommentbyIdController
);

commentRoutes.patch(
  "/:commentId",
  ensureTokenExistis,
  checkParameterUserId,
  checkParameterCommentId,
  checkOwnerComment,
  checkRequestBody(commentsSchemaUpdate),
  updateCommentbyIdController
);

commentRoutes.delete(
  "/:commentId",
  ensureTokenExistis,
  checkParameterCommentId,
  checkOwnerComment,
  deleteCommentController
);

export default commentRoutes;
