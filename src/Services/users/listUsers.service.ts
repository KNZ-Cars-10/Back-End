import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TUsers } from "../../interfaces/users.interfaces";
import User from "../../entities/users.entities";
import { usersSchema } from "../../schemas/users.schemas";

const listAllUsersService = async (): Promise<TUsers | null> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] | null = await userRepository.find({});

  const returnUsers: TUsers = usersSchema.parse(users);

  return returnUsers;
};

export default listAllUsersService;
