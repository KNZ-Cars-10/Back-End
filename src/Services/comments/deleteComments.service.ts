import { Repository } from "typeorm";
import Comment from "../../entities/comments.entities";
import { AppDataSource } from "../../data-source";

const deleteCommentService = async (CommentId: number): Promise<void> => {
  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comment: Comment | null = await commentRepository.findOneBy({
    id: CommentId,
  });

  await commentRepository.remove(comment!);
};

export default deleteCommentService;
