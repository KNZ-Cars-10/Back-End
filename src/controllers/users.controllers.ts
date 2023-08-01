import { Request, Response } from "express";
import createUserService from "../Services/users/createUser.service";
import listAllUsersService from "../Services/users/listUsers.service";
import deleteUserService from "../Services/users/deleteUser.service";
import listUserByIdService from "../Services/users/listUserById.service";
import updateUserService from "../Services/users/updateUser.service";
import {
  TUser,
  TUserRegister,
  TUserRequest,
  TUsers,
} from "../interfaces/users.interfaces";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: TUserRegister = req.body;

  const createdUser = await createUserService(userData);

  return res.status(201).json(createdUser);
};

export const listAllUserController = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  const users: TUsers | null = await listAllUsersService();
  return res.json(users);
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId: number = parseInt(req.params.id);
  const userDatarequest: TUserRequest = req.body;

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
  const userId: number = parseInt(req.params.id);

  await deleteUserService(userId);

  return res.status(204).send();
};

export const listUserbyIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = parseInt(req.params.id);

  const user: TUser | null = await listUserByIdService(userId);

  return res.json(user);
};
