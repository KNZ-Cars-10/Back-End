import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TComments } from "../../interfaces/comments.interfaces";
import Comment from "../../entities/comments.entities";
import { commentsSchema } from "../../schemas/comments.schemas";

export const listCommentsService = async (): Promise<TComments | null> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comments: Comment[] | null = await commentRepository.find({
    relations: {
      advert: true,
      user: true,
    },
  });

  const foundComment = commentsSchema.parse(comments);

  return foundComment;
};
