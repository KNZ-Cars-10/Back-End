import { Request, Response } from "express";
import resetTokenService from "../Services/recoverPassword/resetToken.service";
import resetPasswordService from "../Services/recoverPassword/resetPassword.service";

export const resetTokenController = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  const email = req.body.email;

  try {
    const passwordReset = await resetTokenService(email);

    if (passwordReset) {
      res.status(200).json({ message: "E-mail enviado com sucesso!" });
    }

    return res.status(404).json({ message: "Usuário não encontrado." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ocorreu um erro ao enviar o e-mail." });
  }
};

export const resetPasswordController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = req.params.token;
  const newPassword = req.body.newPassword;

  try {
    await resetPasswordService(token, newPassword);

    return res.status(200).json({ message: "Senha redefinida com sucesso!" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Ocorreu um erro ao redefinir a senha." });
  }
};
