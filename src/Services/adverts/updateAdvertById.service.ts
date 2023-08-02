import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import {
  TAdvert,
  TAdvertRequest,
  TAdvertResponse,
} from "../../interfaces/adverts.interfaces";
import Advert from "../../entities/adverts.entities";
import {
  advertSchema,
  advertSchemaResponse,
} from "../../schemas/adverts.schemas";

const updateAdvertService = async (
  advertId: number,
  advertData: TAdvertRequest
): Promise<TAdvertResponse> => {
  const advertRepository: Repository<Advert> =
    AppDataSource.getRepository(Advert);

  const oldAdvertData: Advert | null = await advertRepository.findOne({
    where: {
      id: advertId,
    },

    relations: {
      user: true,
    },
  });

  const newAdvertData = advertRepository.create({
    ...oldAdvertData,
    ...advertData,
  });

  await advertRepository.save(newAdvertData);

  //   Tem que Resolve

  //   const returnAdvert: TAdvertResponse =
  //     advertSchemaResponse.parse(newAdvertData);

  return newAdvertData;
};

export default updateAdvertService;
