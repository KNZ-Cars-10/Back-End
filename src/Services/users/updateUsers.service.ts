import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TUser, TUserRequest } from "../../interfaces/users.interfaces";
import User from "../../entities/users.entities";
import { userSchema } from "../../schemas/users.schemas";

const updateUserService = async (
  userId: number,
  userData: TUserRequest
): Promise<TUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepository.findOneBy({
    id: userId,
  });

  let newUserData = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  if (userData.name) {
    const words: string[] = userData.name.split(" ");

    const initials = words
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");

    newUserData.inicial = initials;
  }

  await userRepository.save(newUserData);

  const returnUser: TUser = userSchema.parse(newUserData);

  return returnUser;
};

export default updateUserService;
