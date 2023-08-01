import { z } from "zod";
import { userSchema } from "./users.schemas";

export const advertSchema = z.object({
  id: z.number(),
  brand: z.string(),
  model: z.string().email(),
  year: z.string(),
  fuel: z.string(),
  mileage: z.string(),
  color: z.string(),
  price_FIPE: z.string(),
  price: z.string(),
  description: z.string(),
  cover_image: z.string().nullable(),
  first_image: z.string().nullable(),
  second_image: z.string().nullable(),
  createdAt: z.string(),
});

export const advertSchemaRequest = advertSchema.omit({
  id: true,
  createdAt: true,
});

export const advertSchemaResponse = advertSchema.extend({
  user: userSchema,
});

export const updateAdvertSchema = advertSchemaRequest.partial();

export const advertsSchema = advertSchema.array();
