import { Repository } from "typeorm";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import Comment from "../entities/comments.entities";

const checkParameterCommentId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const commentId = parseInt(req.params.commentId);

  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comment: Comment | null = await commentRepository.findOne({
    where: {
      id: commentId,
    },

    relations: {
      user: true,
    },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  res.locals.commentUser = comment.user;

  return next();
};

export default checkParameterCommentId;
