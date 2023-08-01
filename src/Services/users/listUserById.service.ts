import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entities";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { userSchemaResponse } from "../../schemas/users.schemas";

const listUserByIdService = async (
  UserId: number
): Promise<TUserResponse | null> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: UserId,
    },

    relations: {
      adverts: true,
    },
  });

  const returnUser: TUserResponse = userSchemaResponse.parse(user);

  return returnUser;
};

export default listUserByIdService;
