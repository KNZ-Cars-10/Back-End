import { Request, Response } from "express";
import resetPasswordService from "../Services/recoverPassword/resetPassword.service";
import sendTokenService from "../Services/recoverPassword/sendToken.service";

export const sendTokenController = async (
  req: Request,
  res: Response
): Promise<Response | undefined> => {
  const email = req.body.email;

  const recoveryPasswordURL = await sendTokenService(email);

  return res.json({ recoveryPasswordURL: recoveryPasswordURL });
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
