import { z } from "zod";
import {
  advertSchema,
  advertSchemaRequest,
  advertSchemaResponse,
  advertsSchema,
  updateAdvertSchema,
} from "../schemas/adverts.schemas";

export type TPaginationAdvert = {
  prevPage: string | null;
  nextPage: string | null;
  pages: number;
  page: number;
  count: number;
  data: TAdvertResponse[];
};

export type TAdvert = z.infer<typeof advertSchema>;

export type TAdvertResponse = z.infer<typeof advertSchemaResponse>;

export type TAdvertRequest = z.infer<typeof advertSchemaRequest>;

export type TAdvertUpdate = z.infer<typeof updateAdvertSchema>;

export type TAdverts = z.infer<typeof advertsSchema>;
