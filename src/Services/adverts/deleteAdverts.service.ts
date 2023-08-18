import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Advert from "../../entities/adverts.entities";
import User from "../../entities/users.entities";

const deleteAdvertService = async (advertId: number): Promise<void> => {
  const advertRepository: Repository<Advert> =
    AppDataSource.getRepository(Advert);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const advert: Advert | null = await advertRepository.findOne({
    where: {
      id: advertId,
    },
    relations: {
      user: {
        adverts: true,
      },
    },
  });

  const userId = advert?.user.id;

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId!,
    },
    relations: {
      adverts: true,
    },
  });

  console.log(user?.adverts?.length);

  if (user?.adverts?.length! <= 1) {
    const newUserData = userRepository.create({
      ...user,
      is_advertiser: false,
    });

    await userRepository.save(newUserData);
  }

  await advertRepository.remove(advert!);
};

export default deleteAdvertService;
