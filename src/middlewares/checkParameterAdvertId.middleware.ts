import { Repository } from "typeorm";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import Advert from "../entities/adverts.entities";

const checkParameterAdvertId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const AdvertId = parseInt(req.params.id);

  const advertRepository: Repository<Advert> =
    AppDataSource.getRepository(Advert);

  const advert: Advert | null = await advertRepository.findOne({
    where: {
      id: AdvertId,
    },
  });

  if (!advert) {
    throw new AppError("Advert not found", 404);
  }

  res.locals.advert = advert;
  return next();
};

export default checkParameterAdvertId;
