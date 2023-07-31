import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entities";
import { TUser } from "../../interfaces/users.interfaces";
import { userSchema } from "../../schemas/users.schemas";

const listUserByIdService = async (UserId: number): Promise<TUser | null> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: UserId,
    },
  });

  const returnUser: TUser = userSchema.parse(user);

  return returnUser;
};

export default listUserByIdService;
