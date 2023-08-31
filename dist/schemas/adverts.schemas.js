"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.advertsSchema = exports.updateAdvertSchema = exports.advertsSchemaResponse = exports.advertSchemaResponseFull = exports.advertSchemaResponse = exports.advertSchemaRequest = exports.advertSchema = void 0;
const zod_1 = require("zod");
exports.advertSchema = zod_1.z.object({
    id: zod_1.z.number(),
    brand: zod_1.z.string(),
    model: zod_1.z.string(),
    year: zod_1.z.string(),
    fuel: zod_1.z.string(),
    mileage: zod_1.z.string(),
    color: zod_1.z.string(),
    price_FIPE: zod_1.z.string(),
    price: zod_1.z.string(),
    description: zod_1.z.string(),
    cover_image: zod_1.z.string().nullable(),
    other_images: zod_1.z.string().array().nullish(),
    createdAt: zod_1.z.string(),
    status: zod_1.z.boolean(),
});
exports.advertSchemaRequest = exports.advertSchema.omit({
    id: true,
    createdAt: true,
});
exports.advertSchemaResponse = exports.advertSchema.extend({
    user: zod_1.z.object({
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
        inicial: zod_1.z.string(),
        avatar: zod_1.z.string().nullable(),
    }),
});
exports.advertSchemaResponseFull = exports.advertSchema.extend({
    user: zod_1.z.object({
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
        inicial: zod_1.z.string(),
        avatar: zod_1.z.string().nullable(),
    }),
    comments: zod_1.z
        .object({
        id: zod_1.z.number(),
        text: zod_1.z.string(),
        createdAt: zod_1.z.string(),
        user: zod_1.z.object({
            id: zod_1.z.number(),
            name: zod_1.z.string(),
            inicial: zod_1.z.string(),
            color: zod_1.z.string(),
            avatar: zod_1.z.string().nullish(),
        }),
    })
        .array(),
});
exports.advertsSchemaResponse = exports.advertSchema
    .extend({
    user: zod_1.z.object({
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
        inicial: zod_1.z.string(),
        avatar: zod_1.z.string().nullable(),
    }),
})
    .array();
exports.updateAdvertSchema = exports.advertSchemaRequest
    .omit({
    brand: true,
    model: true,
    price_FIPE: true,
})
    .partial();
exports.advertsSchema = exports.advertSchemaResponse.array();
