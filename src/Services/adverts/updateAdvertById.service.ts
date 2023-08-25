import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TAdvert, TAdvertRequest } from "../../interfaces/adverts.interfaces";
import Advert from "../../entities/adverts.entities";
import { advertSchemaResponse } from "../../schemas/adverts.schemas";

const updateAdvertService = async (
  advertId: number,
  advertData: TAdvertRequest
): Promise<TAdvert> => {
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

  const returnAdvert: TAdvert = advertSchemaResponse.parse(newAdvertData);

  return returnAdvert;
};

export default updateAdvertService;
