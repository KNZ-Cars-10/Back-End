import { z } from "zod";
import { advertSchema } from "./adverts.schemas";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  cpf: z.string(),
  phone: z.string(),
  birth_date: z.string(),
  description: z.string(),
  zip_code: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string().nullable(),
  is_advertiser: z.boolean(),
  createdAt: z.string(),
  color: z.string(),
  avatar: z.string().nullable(),
  inicial: z.string(),
  resetToken: z.string().nullable(),
});

export const userSchemaServiceRegister = userSchema
  .omit({
    id: true,
    createdAt: true,
    resetToken: true,
  })
  .extend({
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
  });

export const userSchemaRegister = userSchema
  .omit({
    id: true,
    createdAt: true,
    avatar: true,
    inicial: true,
    resetToken: true,
  })
  .extend({
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

export const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
});

export const userSchemaResponse = userSchema.extend({
  adverts: z.optional(advertSchema).array(),
});

export const updateUserSchema = userSchema
  .extend({
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
  })
  .partial();

export const usersSchema = userSchemaResponse.array();
