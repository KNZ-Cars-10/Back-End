"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsSchema = exports.commentsSchemaUpdate = exports.commentSchemaRquest = exports.commentSchema = void 0;
const zod_1 = require("zod");
exports.commentSchema = zod_1.z.object({
    id: zod_1.z.number(),
    text: zod_1.z.string(),
    createdAt: zod_1.z.string(),
    user: zod_1.z.object({
        id: zod_1.z.number(),
        name: zod_1.z.string(),
        color: zod_1.z.string(),
        inicial: zod_1.z.string(),
        avatar: zod_1.z.string().nullish(),
    }),
    advert: zod_1.z.object({
        id: zod_1.z.number(),
        brand: zod_1.z.string(),
        model: zod_1.z.string(),
    }),
});
exports.commentSchemaRquest = exports.commentSchema.omit({
    id: true,
    createdAt: true,
    user: true,
    advert: true,
});
exports.commentsSchemaUpdate = exports.commentSchema
    .omit({
    advert: true,
    user: true,
    id: true,
    createdAt: true,
})
    .optional();
exports.commentsSchema = exports.commentSchema.array();
