import { z } from "zod";

export const advertSchema = z.object({
  id: z.number(),
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  fuel: z.string(),
  mileage: z.string(),
  color: z.string(),
  price_FIPE: z.string(),
  price: z.string(),
  description: z.string(),
  cover_image: z.string().nullable(),
  first_image: z.string().nullish(),
  second_image: z.string().nullish(),
  other_images: z.string().array().nullish(),
  createdAt: z.string(),
  status: z.boolean(),
});

export const advertSchemaRequest = advertSchema.omit({
  id: true,
  createdAt: true,
});

export const advertSchemaResponse = advertSchema.extend({
  user: z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    cpf: z.string(),
    phone: z.string(),
    birth_date: z.string(),
    description: z.string(),
    zip_code: z.string(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string().nullable(),
    is_advertiser: z.boolean(),
    createdAt: z.string(),
    color: z.string(),
    inicial: z.string(),
  }),
});

export const advertSchemaResponseFull = advertSchema.extend({
  user: z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    cpf: z.string(),
    phone: z.string(),
    birth_date: z.string(),
    description: z.string(),
    zip_code: z.string(),
    state: z.string(),
    city: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string().nullable(),
    is_advertiser: z.boolean(),
    createdAt: z.string(),
    color: z.string(),
    inicial: z.string(),
  }),
  comments: z
    .object({
      id: z.number(),
      text: z.string(),
      createdAt: z.string(),
      user: z.object({
        id: z.number(),
        name: z.string(),
        inicial: z.string(),
        color: z.string(),
      }),
    })
    .array(),
});

export const advertsSchemaResponse = advertSchema
  .extend({
    user: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string().email(),
      cpf: z.string(),
      phone: z.string(),
      birth_date: z.string(),
      description: z.string(),
      zip_code: z.string(),
      state: z.string(),
      city: z.string(),
      street: z.string(),
      number: z.string(),
      complement: z.string().nullable(),
      is_advertiser: z.boolean(),
      createdAt: z.string(),
      color: z.string(),
      inicial: z.string(),
    }),
  })
  .array();

export const updateAdvertSchema = advertSchemaRequest.partial();

export const advertsSchema = advertSchemaResponse.array();
