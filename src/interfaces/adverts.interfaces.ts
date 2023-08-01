import { z } from "zod";
import {
  advertSchema,
  advertSchemaRequest,
  advertsSchema,
  updateAdvertSchema,
} from "../schemas/adverts.schemas";

export type TAdvert = z.infer<typeof advertSchema>;

export type TAdvertRequest = z.infer<typeof advertSchemaRequest>;

export type TAdvertUpdate = z.infer<typeof updateAdvertSchema>;

export type TAdverts = z.infer<typeof advertsSchema>;
