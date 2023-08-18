import { Request, Response } from "express";

import {
  TComment,
  TCommentRequest,
  TComments,
} from "../interfaces/comments.interfaces";
import createCommentService from "../Services/comments/createComments.service";
import { listCommentsService } from "../Services/comments/listComments.service";
import listCommentByIdService from "../Services/comments/listCommentById.service";
import updateCommentService from "../Services/comments/updateCommentById.service";
import deleteCommentService from "../Services/comments/deleteComments.service";

export const createCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const commentData: TCommentRequest = req.body;
  const userId: number = res.locals.sub;
  const advertId: number = parseInt(req.params.advertId);

  const createdComment = await createCommentService(
    commentData,
    userId,
    advertId
  );

  return res.status(201).json(createdComment);
};

export const listAllCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const Comments: TComments | null = await listCommentsService();
  return res.json(Comments);
};

export const listCommentbyIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const commentId = parseInt(req.params.commentId);

  const comment: TComment | null = await listCommentByIdService(commentId);

  return res.json(comment);
};

export const updateCommentbyIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const commentId = parseInt(req.params.commentId);

  const commentData = req.body;

  const Comment: TComment | null = await updateCommentService(
    commentId,
    commentData
  );

  return res.json(Comment);
};

export const deleteCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const commentId: number = parseInt(req.params.commentId);

  await deleteCommentService(commentId);

  return res.status(204).send();
};
