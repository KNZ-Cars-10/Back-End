"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersSchema = exports.updateUserSchema = exports.userSchemaResponse = exports.userSchemaRequest = exports.userSchemaRegister = exports.userSchemaServiceRegister = exports.userSchema = void 0;
const zod_1 = require("zod");
const adverts_schemas_1 = require("./adverts.schemas");
exports.userSchema = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    cpf: zod_1.z.string(),
    phone: zod_1.z.string(),
    birth_date: zod_1.z.string(),
    description: zod_1.z.string(),
    zip_code: zod_1.z.string(),
    state: zod_1.z.string(),
    city: zod_1.z.string(),
    street: zod_1.z.string(),
    number: zod_1.z.string(),
    complement: zod_1.z.string().nullable(),
    is_advertiser: zod_1.z.boolean(),
    createdAt: zod_1.z.string(),
    color: zod_1.z.string(),
    avatar: zod_1.z.string().nullable(),
    inicial: zod_1.z.string(),
});
exports.userSchemaServiceRegister = exports.userSchema
    .omit({
    id: true,
    createdAt: true,
})
    .extend({
    password: zod_1.z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
    resetToken: zod_1.z.string().nullable(),
});
exports.userSchemaRegister = exports.userSchema
    .omit({
    id: true,
    createdAt: true,
    avatar: true,
    inicial: true,
})
    .extend({
    password: zod_1.z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
    confirm_password: zod_1.z.string(),
})
    .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
});
exports.userSchemaRequest = exports.userSchema.omit({
    id: true,
    createdAt: true,
});
exports.userSchemaResponse = exports.userSchema.extend({
    adverts: zod_1.z.optional(adverts_schemas_1.advertSchema).array(),
});
exports.updateUserSchema = exports.userSchema
    .omit({
    color: true,
    id: true,
    createdAt: true,
    inicial: true,
})
    .extend({
    password: zod_1.z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
})
    .partial();
exports.usersSchema = exports.userSchemaResponse.array();
