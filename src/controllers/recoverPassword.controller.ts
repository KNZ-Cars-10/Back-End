import { Request, Response } from "express";
import resetTokenService from "../Services/recoverPassword/resetToken.service";
import resetPasswordService from "../Services/recoverPassword/resetPassword.service";

export const resetTokenController = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { email } = req.body;

  await resetTokenService(email);

  res.status(200).json({ message: "E-mail enviado com sucesso!" });
};

export const resetPasswordController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token = req.params.token;
  const newPassword = req.body.newPassword;

  await resetPasswordService(token, newPassword);

  return res.status(200).json({ message: "Senha redefinida com sucesso!" });
};
