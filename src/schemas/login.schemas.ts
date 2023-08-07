import { z } from "zod";

export const resquestLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
});

export const responseLoginSchema = z.object({
  token: z.string(),
});
