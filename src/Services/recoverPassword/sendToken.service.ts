import { Repository } from "typeorm";
import User from "../../entities/users.entities";
// import jwt from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { transporter } from "../../app";
import { AppError } from "../../error";
import { randomUUID } from "crypto";

const sendTokenService = async (email: string): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: { email },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }
  const resetToken = randomUUID();

  // const resetToken = jwt.sign(
  //   { userId: user.id, random: randomUUID() },
  //   process.env.SECRET_KEY_RECOVER_PASSWORD!,
  //   {
  //     expiresIn: "1h",
  //   }
  // );

  const newUserData = userRepository.create({
    ...user,
    resetToken: resetToken,
  });

  await userRepository.save(newUserData);

  const recoveryPasswordURL = `${process.env
    .BASE_URL!}resetPassword/${resetToken}`;

  const mailOptions = {
    from: process.env.BASE_EMAIL!,
    to: email,
    subject: "Recuperação de Senha",
    text: `Clique no link para redefinir sua senha: ${recoveryPasswordURL}`,
  };

  await transporter.sendMail(mailOptions);

  return recoveryPasswordURL;
};

export default sendTokenService;
