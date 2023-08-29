import { Repository } from "typeorm";
import User from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { transporter } from "../../app";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { AppError } from "../../error";

const resetTokenService = async (email: string) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: { email },
  });

  if (!user) {
    throw new AppError("Usuário não encontrado.", 404);
  }

  const resetToken = jwt.sign(
    { userId: user.id, random: uuidv4() },
    process.env.SECRET_KEY_RECOVER_PASSWORD!,
    {
      expiresIn: "1h",
    }
  );

  user!.resetToken = resetToken;

  await userRepository.save(user);

  const mailOptions = {
    from: process.env.BASE_EMAIL!,
    to: email,
    subject: "Recuperação de Senha",
    text: `Clique no link para redefinir sua senha: ${process.env
      .BASE_URL!}/recover-password/${resetToken}`,
  };

  await transporter.sendMail(mailOptions);

  return resetToken;
};

export default resetTokenService;
