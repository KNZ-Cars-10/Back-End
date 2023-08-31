import { Repository } from "typeorm";
import User from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";

import { TUser } from "../../interfaces/users.interfaces";
import { AppError } from "../../error";

const resetPasswordService = async (
  token: string,
  newPassword: string
): Promise<TUser> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      resetToken: token,
    },
  });

  if (!user) {
    throw new AppError("Usuário não encontrado.");
  }

  const newUserData = userRepository.create({
    ...user,
    resetToken: null,
    password: newPassword,
  });

  const returnUser = await userRepository.save(newUserData);

  return returnUser;
};

export default resetPasswordService;
