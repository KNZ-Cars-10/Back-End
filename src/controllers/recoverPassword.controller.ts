import { Request, Response } from "express";
import resetTokenService from "../Services/recoverPassword/resetToken.service";
import resetPasswordService from "../Services/recoverPassword/resetPassword.service";

export const resetTokenController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { email } = req.body;

  await resetTokenService(email);

  res.json({ message: "E-mail enviado com sucesso!" });
};

export const resetPasswordController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { newPassword } = req.body;
  const { token } = req.params;

  await resetPasswordService(newPassword, token);

  return res.json({ message: "Senha redefinida com sucesso!" });
};
