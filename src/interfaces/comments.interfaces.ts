import { z } from "zod";
import {
  commentSchema,
  commentSchemaRquest,
  commentsSchema,
  commentsSchemaUpdate,
} from "../schemas/comments.schemas";

export type TComment = z.infer<typeof commentSchema>;

export type TCommentRequest = z.infer<typeof commentSchemaRquest>;

export type TCommentupdate = z.infer<typeof commentsSchemaUpdate>;

export type TComments = z.infer<typeof commentsSchema>;
