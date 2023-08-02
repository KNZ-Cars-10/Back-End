import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Advert from "../../entities/adverts.entities";

const deleteAdvertService = async (advertId: number): Promise<void> => {
  const advertRepository: Repository<Advert> =
    AppDataSource.getRepository(Advert);

  const advert: Advert | null = await advertRepository.findOneBy({
    id: advertId,
  });

  await advertRepository.remove(advert!);
};

export default deleteAdvertService;
