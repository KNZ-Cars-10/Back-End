import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { TUser } from "../Interfaces/users.interfaces";

const verifyOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const user: TUser = res.locals.user;
  const sub: number = res.locals.sub;

  if (sub != user.id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default verifyOwner;
