import { Request, Response } from "express";
import createAdvertService from "../Services/adverts/createAdverts.service";
import {
  TAdvert,
  TAdvertRequest,
  TAdvertResponse,
  TPaginationAdvert,
} from "../interfaces/adverts.interfaces";
import listAllAdvertsService from "../Services/adverts/listAdverts.service";
import listAdvertByIdService from "../Services/adverts/listAdvertById.service";
import updateAdvertService from "../Services/adverts/updateAdvertById.service";
import deleteAdvertService from "../Services/adverts/deleteAdverts.service";
import datauriparser from "datauri/parser";
import cloudinary from "../cloudinaryConfig";

export const createAdvertController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const advertData: TAdvertRequest = { ...req.body, status: true };

  const userId: number = res.locals.sub;

  const createdAdvert = await createAdvertService(advertData, userId);

  return res.status(201).json(createdAdvert);
};

export const listAllAdvertsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const brand: any = req.query.brand;
  const model: any = req.query.model;
  const year: any = req.query.year;
  const fuel: any = req.query.fuel;
  const color: any = req.query.color;
  let mileage: any = req.query.mileage;
  let price: any = req.query.price;

  if (mileage == null) {
    mileage = "9000000000";
  }

  if (price == null) {
    price = "9000000000";
  }

  const adverts: TPaginationAdvert | null = await listAllAdvertsService(
    brand,
    model,
    year,
    fuel,
    mileage,
    color,
    price
  );
  return res.json(adverts);
};

export const listAdvertbyIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const advertId = parseInt(req.params.advertId);

  const advert: TAdvertResponse | null = await listAdvertByIdService(advertId);

  return res.json(advert);
};

export const updateAdvertbyIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const advertId = parseInt(req.params.advertId);

  const advertData = req.body;

  const advert: TAdvert | null = await updateAdvertService(
    advertId,
    advertData
  );

  return res.json(advert);
};

export const deleteAdvertController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const advertId: number = parseInt(req.params.advertId);

  await deleteAdvertService(advertId);

  return res.status(204).send();
};

export const generateURLImage = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const parse = new datauriparser();

  const result = await cloudinary.uploader.upload(
    String(parse.format("image", req.file!.buffer).content)
  );

  return res.json(result);
};
