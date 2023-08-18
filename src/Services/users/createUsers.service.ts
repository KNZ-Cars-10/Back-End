import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entities";
import { TUser, TUserRegisterService } from "../../interfaces/users.interfaces";
import { userSchema } from "../../schemas/users.schemas";

const createUserService = async (
  userData: TUserRegisterService
): Promise<TUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User = userRepository.create(userData);

  await userRepository.save(user);

  const returnUser = userSchema.parse(user);

  return returnUser;
};

export default createUserService;
