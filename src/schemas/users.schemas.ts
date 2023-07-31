import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  cpf: z.string(),
  phone: z.string(),
  birth_date: z.date(),
  description: z.string(),
  zip_code: z.string(),
  state: z.string(),
  city: z.string(),
  street: z.string(),
  number: z.string(),
  complement: z.string().nullish(),
  is_advertise: z.boolean(),
  createdAt: z.date(),
});

export const usersSchema = userSchema.array();

export const userSchemaRegister = userSchema
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    password: z.string(),
    confirm_password: z.string(),
  });

export const updateUserSchema = userSchemaRegister.partial();
