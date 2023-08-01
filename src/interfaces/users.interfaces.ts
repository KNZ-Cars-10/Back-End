import { z } from "zod";
import {
  updateUserSchema,
  userSchema,
  userSchemaRegister,
  userSchemaRequest,
  usersSchema,
} from "../schemas/users.schemas";

export type TUser = z.infer<typeof userSchema>;

export type TUserRegister = z.infer<typeof userSchemaRegister>;

export type TUserRequest = z.infer<typeof userSchemaRequest>;

export type TUserUpdate = z.infer<typeof updateUserSchema>;

export type TUsers = z.infer<typeof usersSchema>;
