import { Repository } from "typeorm";
import User from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const resetPasswordService = async (newPassword: string, token: string) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: { resetToken: token },
  });

  if (!user) {
    throw new AppError("Usuário não encontrado.", 404);
  }

  user.password = newPassword;
  user.resetToken = null;

  await userRepository.save(user);
};

export default resetPasswordService;
