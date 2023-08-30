import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string()
    .email()
    .min(1, {
      message: "O Email é obrigatório.",
    })
    .email("Email Invalido"),
});

export const resetPasswordSchema = z.object({
  newPassword: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
});
