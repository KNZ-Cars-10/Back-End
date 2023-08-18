import { Repository } from "typeorm";
import { TComment } from "../../interfaces/comments.interfaces";
import { AppDataSource } from "../../data-source";
import Comment from "../../entities/comments.entities";
import { commentSchema } from "../../schemas/comments.schemas";

const listCommentByIdService = async (commentId: number): Promise<TComment> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comment: Comment | null = await commentRepository.findOne({
    where: {
      id: commentId,
    },

    relations: {
      user: true,
      advert: true,
    },
  });

  const returnComment: TComment = commentSchema.parse(comment);

  return returnComment;
};

export default listCommentByIdService;
