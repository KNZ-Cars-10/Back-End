import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entities";
import {
  TAdvertRequest,
  TAdvertResponse,
} from "../../interfaces/adverts.interfaces";
import { userSchema } from "../../schemas/users.schemas";
import { TUser } from "../../interfaces/users.interfaces";
import Advert from "../../entities/adverts.entities";
import { advertSchemaResponse } from "../../schemas/adverts.schemas";
import { AppError } from "../../error";

const createAdvertService = async (
  contactData: TAdvertRequest,
  userId: number
): Promise<TAdvertResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not Found", 404);
  }

  const foundUser: TUser = userSchema.parse(user);

  const newAdvertData = {
    ...contactData,
    user: foundUser,
  };

  const advertRepository: Repository<Advert> =
    AppDataSource.getRepository(Advert);

  const advert = advertRepository.create(newAdvertData);

  await advertRepository.save(advert);

  console.log(advert);

  const returnAdvert: TAdvertResponse = advertSchemaResponse.parse(advert);

  return returnAdvert;
};

export default createAdvertService;
