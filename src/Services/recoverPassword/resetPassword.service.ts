import { Repository } from "typeorm";
import User from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import jwt from "jsonwebtoken";
import { AppError } from "../../error";

const resetPasswordService = async (token: string, newPassword: string) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  try {
    const decodedToken: any = jwt.verify(
      token,
      process.env.SECRET_KEY_RECOVER_PASSWORD!
    );

    const user: User | null = await userRepository.findOne({
      where: { id: decodedToken.userId },
    });

    if (!user) {
      throw new AppError("Usuário não encontrado.", 404);
    }

    user.password = newPassword;
    user.resetToken = null;

    await userRepository.save(user);

    return true;
  } catch (error) {
    console.error(error);
    throw new AppError("Ocorreu um erro ao redefinir a senha.", 404);
  }
};

export default resetPasswordService;
