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
  // if (!page) {
  //   page = 1;
  // }

  // if (!perPage) {
  //   perPage = 6;
  // }

  // if (perPage <= 0 || perPage > 5) {
  //   perPage = 5;
  // }

  // if (page <= 0) {
  //   page = 1;
  // }

  const advertRepository: Repository<Advert> =
    AppDataSource.getRepository(Advert);

  // let adverts: TAdvertResponse[] | undefined;
  // let prevPage: string | null = `http://localhost:3000/adverts?page=${
  //   page - 1
  // }&perPage=${perPage}`;
  // let nextPage: string | null = `http://localhost:3000/adverts?page=${
  //   page + 1
  // }&perPage=${perPage}`;
  // let maxPage: number;
  // let count: number;

  // adverts = await advertRepository.find();

  // maxPage = adverts.length / perPage;

  // console.log(mileage);
  // console.log(price);
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

    // skip: (page - 1) * perPage,
    // take: perPage,
    // order: {
    //   id: "ASC",
    // },
  });
  let count = adverts?.length;

  // if (page == 1) {
  //   prevPage = null;
  // }
  // if (page >= maxPage) {
  //   nextPage = null;
  // }

  const returnAdverts: TAdverts = advertsSchemaResponse.parse(adverts);

  const returnGetAdverts = {
    // prevPage: prevPage,
    // nextPage: nextPage,
    // page: page,
    // pages: Math.ceil(maxPage),
    count: count,
    data: returnAdverts,
  };

  return returnGetAdverts;
};

export default listAllAdvertsService;
