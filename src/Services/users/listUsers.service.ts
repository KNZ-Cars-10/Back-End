import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entities";
import { TUserResponse } from "../../interfaces/users.interfaces";
import { usersSchema } from "../../schemas/users.schemas";

const listAllUsersService = async (): Promise<TUserResponse[] | null> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] | null = await userRepository.find({
    relations: { adverts: true },
  });

  const returnUsers: TUserResponse[] = usersSchema.parse(users);

  return returnUsers;
};

export default listAllUsersService;
