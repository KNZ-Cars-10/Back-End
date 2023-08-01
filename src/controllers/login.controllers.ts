import { Request, Response } from "express";
import createSessionService from "../Services/login/createSession.service";
import { resquestLoginSchema } from "../schemas/login.schemas";
import { TLoginResponse } from "../interfaces/login.interfaces";

const loginController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData = resquestLoginSchema.parse(req.body);

  const token: TLoginResponse = await createSessionService(userData);
  return res.status(200).json(token);
};

export default loginController;
