import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Advert from "../../entities/adverts.entities";
import { TAdvertResponse } from "../../interfaces/adverts.interfaces";
import { advertsSchema } from "../../schemas/adverts.schemas";

const listAllAdvertsService = async (): Promise<TAdvertResponse[] | null> => {
  const AdvertRepository: Repository<Advert> =
    AppDataSource.getRepository(Advert);

  const adverts: TAdvertResponse[] | null = await AdvertRepository.find({
    relations: {
      user: true,
    },
  });

  // Tem que resolve

  //   const returnAdverts: TAdvertResponse[] = advertsSchema.parse(adverts);

  return adverts;
};

export default listAllAdvertsService;
