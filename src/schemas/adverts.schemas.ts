import { z } from "zod";

export const advertSchema = z.object({
  id: z.number(),
  brand: z.string(),
  model: z.string(),
  year: z.number(),
  fuel: z.string(),
  mileage: z.number(),
  color: z.string(),
  price_FIPE: z.number(),
  price: z.number(),
  description: z.string(),
  cover_image: z.string().nullable(),
  first_image: z.string().nullable(),
  second_image: z.string().nullable(),
  other_images: z.string().array().nullish(),
});

type teste = z.infer<typeof advertSchema>;

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
    number: z.number(),
    complement: z.string().nullable(),
    is_advertise: z.boolean(),
  }),
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
      number: z.number(),
      complement: z.string().nullable(),
      is_advertise: z.boolean(),
    }),
  })
  .array();

export const updateAdvertSchema = advertSchemaRequest.partial();

export const advertsSchema = advertSchemaResponse.array();
