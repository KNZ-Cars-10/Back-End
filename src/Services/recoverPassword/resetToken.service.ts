import { Repository } from "typeorm";
import User from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { transporter } from "../../app";
import { AppError } from "../../error";
import { randomUUID } from "crypto";
import Mailgen from "mailgen";

const resetTokenService = async (userEmail: string) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: { email: userEmail },
  });

  if (!user) {
    throw new AppError("Usuário não encontrado.", 404);
  }

  const resetToken = randomUUID();

  user!.resetToken = resetToken;

  await userRepository.save(user);

  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "KNZ Cars Team 09",
      link: `${process.env.BASE_URL!}`,
    },
  });

  const email = {
    body: {
      greeting: "Olá",
      name: user.name,
      intro:
        "Você recebeu este e-mail porque foi recebida uma solicitação de redefinição de senha da sua conta.",
      action: {
        instructions: "Clique no botão abaixo para redefinir sua senha:",
        button: {
          color: "#4529E6",
          text: "Redefinir sua senha",
          link: `http://localhost:3000/recover-password/${resetToken}`,
        },
      },
      outro:
        "Se você não solicitou uma redefinição de senha, nenhuma ação adicional será necessária de sua parte.",
      signature: "Sinceramente",
    },
  };

  const emailBody = mailGenerator.generate(email);

  const mailOptions = {
    from: process.env.BASE_EMAIL!,
    to: user.email,
    subject: "Recuperação de Senha",
    html: emailBody,
  };

  await transporter.sendMail(mailOptions);
};

export default resetTokenService;
