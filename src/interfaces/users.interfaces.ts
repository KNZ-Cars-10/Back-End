import { z } from "zod";
import {
  updateUserSchema,
  userSchema,
  userSchemaRegister,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaServiceRegister,
} from "../schemas/users.schemas";

export type TUser = z.infer<typeof userSchema>;

export type TUserRegister = z.infer<typeof userSchemaRegister>;

export type TUserRegisterService = z.infer<typeof userSchemaServiceRegister>;

export type TUserRequest = z.infer<typeof userSchemaRequest>;

export type TUserResponse = z.infer<typeof userSchemaResponse>;

export type TUserUpdate = z.infer<typeof updateUserSchema>;
