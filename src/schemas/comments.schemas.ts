import { z } from "zod";

export const commentSchema = z.object({
  id: z.number(),
  text: z.string(),
  createdAt: z.string(),
  user: z.object({
    id: z.number(),
    name: z.string(),
    color: z.string(),
    inicial: z.string(),
    avatar: z.string().nullish(),
  }),

  advert: z.object({
    id: z.number(),
    brand: z.string(),
    model: z.string(),
  }),
});

export const commentSchemaRquest = commentSchema.omit({
  id: true,
  createdAt: true,
  user: true,
  advert: true,
});

export const commentsSchemaUpdate = commentSchema
  .omit({
    advert: true,
    user: true,
    id: true,
    createdAt: true,
  })
  .optional();

export const commentsSchema = commentSchema.array();
