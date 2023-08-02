import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import { TUser } from "../interfaces/users.interfaces";

const checkOwnerAdvert = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const advertUser: TUser = res.locals.advertUser;
  const sub: number = res.locals.sub;

  console.log(advertUser);

  console.log(sub);

  if (sub != advertUser.id) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export default checkOwnerAdvert;
