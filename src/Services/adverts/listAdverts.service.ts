import { LessThan, Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Advert from "../../entities/adverts.entities";
import {
  TAdvertResponse,
  TAdverts,
  TPaginationAdvert,
} from "../../interfaces/adverts.interfaces";
import { advertsSchemaResponse } from "../../schemas/adverts.schemas";

const listAllAdvertsService = async (
  brand: any,
  model: any,
  year: any,
  fuel: any,
  mileage: any,
  color: any,
  price: any
): Promise<any | null> => {
  const advertRepository: Repository<Advert> =
    AppDataSource.getRepository(Advert);

  const adverts: Advert[] | null = await advertRepository.find({
    where: {
      brand: brand,
      model: model,
      year: year,
      fuel: fuel,
      color: color,
      mileage: LessThan(mileage),
      price: LessThan(price),
      status: true,
    },

    relations: {
      user: true,
    },
  });
  let count = adverts?.length;

  const returnAdverts: TAdverts = advertsSchemaResponse.parse(adverts);

  const returnGetAdverts = {
    count: count,
    data: returnAdverts,
  };

  return returnGetAdverts;
};

export default listAllAdvertsService;
