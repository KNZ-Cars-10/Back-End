import { Request, Response } from "express";
import createAdvertService from "../Services/adverts/createAdverts.service";
import { TAdvertRequest } from "../interfaces/adverts.interfaces";

export const createAdvertController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const advertData: TAdvertRequest = req.body;
  const userId: number = res.locals.sub;

  const createdAdvert = await createAdvertService(advertData, userId);

  return res.status(201).json(createdAdvert);
};
