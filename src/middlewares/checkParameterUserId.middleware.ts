import { Repository } from "typeorm";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import User from "../entities/users.entities";

const checkParameterUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userId = parseInt(req.params.id);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  res.locals.user = user;
  return next();
};

export default checkParameterUserId;
