import { z } from "zod";

const emailSchema = z.string().email("Email inválido.");

const passwordSchema = z
  .string()
  .min(8, "A senha deve ter no mínimo 8 caracteres.");

export { emailSchema, passwordSchema };
