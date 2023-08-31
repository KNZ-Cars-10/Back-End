"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseLoginSchema = exports.resquestLoginSchema = void 0;
const zod_1 = require("zod");
exports.resquestLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
});
exports.responseLoginSchema = zod_1.z.object({
    token: zod_1.z.string(),
});
