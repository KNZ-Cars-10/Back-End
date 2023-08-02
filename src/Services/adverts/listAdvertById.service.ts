import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TAdvertResponse } from "../../interfaces/adverts.interfaces";
import Advert from "../../entities/adverts.entities";
import {
  advertSchema,
  advertSchemaResponse,
} from "../../schemas/adverts.schemas";

const listAdvertByIdService = async (
  advertId: number
): //   Tem que Resolve
Promise<any> => {
  const advertRepository: Repository<Advert> =
    AppDataSource.getRepository(Advert);

  const advert: Advert | null = await advertRepository.findOne({
    where: {
      id: advertId,
    },

    relations: {
      user: true,
    },
  });

  console.log(advert);

  //   Tem que Resolve

  //   const returnAdvert: TAdvertResponse = advertSchemaResponse.parse(advert);

  return advert;
};

export default listAdvertByIdService;
