import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TAdvertResponse } from "../../interfaces/adverts.interfaces";
import Advert from "../../entities/adverts.entities";
import { advertSchemaResponse } from "../../schemas/adverts.schemas";

const listAdvertByIdService = async (
  advertId: number
): Promise<TAdvertResponse> => {
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

  const returnAdvert: TAdvertResponse = advertSchemaResponse.parse(advert);

  return returnAdvert;
};

export default listAdvertByIdService;
