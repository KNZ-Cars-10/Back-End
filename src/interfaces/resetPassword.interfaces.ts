import { z } from "zod";
import {
  emailSchema,
  resetPasswordSchema,
} from "../schemas/resetPassword.schemas";

export type TEmailRequest = z.infer<typeof emailSchema>;

export type TResetPasswordRequest = z.infer<typeof resetPasswordSchema>;
