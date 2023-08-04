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
  number: z.number(),
  complement: z.string().nullable(),
  is_advertise: z.boolean(),
});

export const userSchemaRegister = userSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    password: z.string(),
    confirm_password: z.string(),
  });

export const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
});

export const userSchemaResponse = userSchema.extend({
  adverts: z.optional(advertSchema).array(),
});

export const updateUserSchema = userSchemaRegister
  .omit({
    confirm_password: true,
  })
  .partial();

export const usersSchema = userSchemaResponse.array();
