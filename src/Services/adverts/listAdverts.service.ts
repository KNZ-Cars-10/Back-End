import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Advert from "../../entities/adverts.entities";
import {
  TAdvertResponse,
  TPaginationAdvert,
} from "../../interfaces/adverts.interfaces";

const listAllAdvertsService = async (
  page: number,
  perPage: number
  // order: any,
  // sort: any
): Promise<TPaginationAdvert | null> => {
  if (!page) {
    page = 1;
  }

  if (!perPage) {
    perPage = 5;
  }

  if (perPage <= 0 || perPage > 5) {
    perPage = 5;
  }

  if (page <= 0) {
    page = 1;
  }

  const advertRepository: Repository<Advert> =
    AppDataSource.getRepository(Advert);

  // let orderObj = {};
  let adverts: TAdvertResponse[] | undefined;
  let prevPage: string | null = `http://localhost:3000/adverts?page=${
    page - 1
  }&perPage=${perPage}`;
  let nextPage: string | null = `http://localhost:3000/adverts?page=${
    page + 1
  }&perPage=${perPage}`;
  let maxPage: number;
  let count: number;

  // if (!order || !sort) {
  //   order = "asc";
  // }

  // if (order !== "asc" && order !== "desc") {
  //   order = "asc";
  // }

  // if (sort == "price") {
  //   orderObj = {
  //     price: order,
  //   };
  // }
  //  else if (sort == "year") {
  //   orderObj = {
  //     year: order,
  //   };
  // }

  // else {
  //   orderObj = {
  //     id: order,
  //   };
  // }

  adverts = await advertRepository.find();

  count = adverts.length;

  maxPage = adverts.length / perPage;

  if (!page || !perPage) {
    adverts = await advertRepository.find({
      order: {
        id: "ASC",
      },
    });
  } else {
    console.log((page - 1) * perPage);
    console.log(perPage);

    adverts = await advertRepository.find({
      relations: {
        user: true,
      },

      skip: (page - 1) * perPage,
      take: perPage,
      order: {
        id: "ASC",
      },
    });
  }

  if (page == 1) {
    prevPage = null;
  }
  if (page >= maxPage) {
    nextPage = null;
  }

  const returnGetAdverts = {
    prevPage: prevPage,
    nextPage: nextPage,
    count: count,
    data: adverts,
  };

  // Tem que resolve

  //   const returnAdverts: TAdvertResponse[] = advertsSchema.parse(adverts);

  return returnGetAdverts;
};

export default listAllAdvertsService;
