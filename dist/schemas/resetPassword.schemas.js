"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordSchema = exports.emailSchema = void 0;
const zod_1 = require("zod");
exports.emailSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .email()
        .min(1, {
        message: "O Email é obrigatório.",
    })
        .email("Email Invalido"),
});
exports.resetPasswordSchema = zod_1.z.object({
    newPassword: zod_1.z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
});
