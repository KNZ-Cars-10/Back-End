import { z } from "zod";
import {
  advertSchema,
  advertSchemaRequest,
  advertSchemaResponse,
  advertsSchema,
  updateAdvertSchema,
} from "../schemas/adverts.schemas";
import Advert from "../entities/adverts.entities";

export type TPaginationAdvert = {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: TAdvertResponse[];
};

export type TAdvert = z.infer<typeof advertSchema>;

export type TAdvertResponse = z.infer<typeof advertSchemaResponse>;

export type TAdvertRequest = z.infer<typeof advertSchemaRequest>;

export type TAdvertUpdate = z.infer<typeof updateAdvertSchema>;

export type TAdverts = z.infer<typeof advertsSchema>;
