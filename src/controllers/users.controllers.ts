import { Request, Response } from "express";
import createUserService from "../Services/users/createUsers.service";
import listAllUsersService from "../Services/users/listUsers.service";
import deleteUserService from "../Services/users/deleteUsers.service";
import listUserByIdService from "../Services/users/listUserById.service";
import updateUserService from "../Services/users/updateUsers.service";
import {
  TUser,
  TUserRegisterService,
  TUserRequest,
  TUserResponse,
} from "../interfaces/users.interfaces";
import { userSchemaServiceRegister } from "../schemas/users.schemas";
import cloudinary from "../cloudinaryConfig";

import datauriparser from "datauri/parser";
import checkUserEmailService from "../Services/users/checkUserEmail.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const words: string[] = req.body.name.split(" ");

  const initials = words
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  let userData: TUserRegisterService = {
    ...req.body,
    avatar: null,
    inicial: initials,
  };

  const newUserData: TUserRegisterService =
    userSchemaServiceRegister.parse(userData);

  const createdUser: TUser = await createUserService(newUserData);

  return res.status(201).json(createdUser);
};

export const listAllUserController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const users: TUserResponse[] | null = await listAllUsersService();
  return res.json(users);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.userId);
  const userDataRequest: TUserRequest = req.body;

  const updatedUser: string | TUser = await updateUserService(
    userId,
    userDataRequest
  );

  return res.json(updatedUser);
};

export const updateAvatarUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.userId);
  let userDatarequest = req.body;

  const parse = new datauriparser();

  if (req.file) {
    const result = await cloudinary.uploader.upload(
      String(parse.format("image", req.file!.buffer).content)
    );
    if (result) {
      userDatarequest = { avatar: result.secure_url };
    }
  }

  const updatedUser: string | TUser = await updateUserService(
    userId,
    userDatarequest
  );

  return res.json(updatedUser);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.userId);

  await deleteUserService(userId);

  return res.status(204).send();
};

export const listUserbyIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = parseInt(req.params.userId);

  const user: TUser | null = await listUserByIdService(userId);

  return res.json(user);
};

export const checkUserEmailController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  console.log("entrou");
  const email = req.params.email;
  const userExist: boolean = await checkUserEmailService(email);

  return res.json({ exists: userExist });
};
