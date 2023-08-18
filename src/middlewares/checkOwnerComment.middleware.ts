import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { TUser } from "../interfaces/users.interfaces";

const checkOwnerComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const commentUser: TUser = res.locals.commentUser;
  const sub: number = res.locals.sub;

  if (sub != commentUser.id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default checkOwnerComment;
