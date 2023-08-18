import { Repository } from "typeorm";
import {
  TComment,
  TCommentRequest,
} from "../../interfaces/comments.interfaces";
import Comment from "../../entities/comments.entities";
import { AppDataSource } from "../../data-source";
import { commentSchema } from "../../schemas/comments.schemas";

const updateCommentService = async (
  commentId: number,
  commentData: TCommentRequest
): Promise<TComment> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const oldCommentData: Comment | null = await commentRepository.findOne({
    where: {
      id: commentId,
    },

    relations: {
      advert: true,
      user: true,
    },
  });

  const newCommentData = commentRepository.create({
    ...oldCommentData,
    ...commentData,
  });

  await commentRepository.save(newCommentData);

  const returnComment: TComment = commentSchema.parse(newCommentData);

  return returnComment;
};

export default updateCommentService;
