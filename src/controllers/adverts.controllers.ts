import { Request, Response } from "express";
import createAdvertService from "../Services/adverts/createAdverts.service";
import {
  TAdvertRequest,
  TAdvertResponse,
  TPaginationAdvert,
} from "../interfaces/adverts.interfaces";
import listAllAdvertsService from "../Services/adverts/listAdverts.service";
import listAdvertByIdService from "../Services/adverts/listAdvertById.service";
import updateAdvertService from "../Services/adverts/updateAdvertById.service";
import deleteAdvertService from "../Services/adverts/deleteAdverts.service";

export const createAdvertController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const advertData: TAdvertRequest = req.body;
  const userId: number = res.locals.sub;

  const createdAdvert = await createAdvertService(advertData, userId);

  return res.status(201).json(createdAdvert);
};

export const listAllAdvertsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const page: number | undefined = Number(req.query.page);
  const perPage: number | undefined = Number(req.query.perPage);
  const order: any = req.query.order;
  const sort: any = req.query.sort;

  const adverts: TPaginationAdvert | null = await listAllAdvertsService(
    page,
    perPage,
    order,
    sort
  );
  return res.json(adverts);
};

export const listAdvertbyIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const advertId = parseInt(req.params.id);

  const advert: TAdvertResponse | null = await listAdvertByIdService(advertId);

  return res.json(advert);
};

export const updateAdvertbyIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const advertId = parseInt(req.params.id);

  const advertData = req.body;

  const advert: TAdvertResponse | null = await updateAdvertService(
    advertId,
    advertData
  );

  return res.json(advert);
};

export const deleteAdvertController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const advertId: number = parseInt(req.params.id);

  await deleteAdvertService(advertId);

  return res.status(204).send();
};
