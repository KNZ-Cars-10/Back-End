import { Repository } from "typeorm";
import {
  TComment,
  TCommentRequest,
} from "../../interfaces/comments.interfaces";
import User from "../../entities/users.entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { TUser } from "../../interfaces/users.interfaces";
import { userSchema } from "../../schemas/users.schemas";
import Comment from "../../entities/comments.entities";
import { TAdvert } from "../../interfaces/adverts.interfaces";
import Advert from "../../entities/adverts.entities";
import { advertSchema } from "../../schemas/adverts.schemas";
import { commentSchema } from "../../schemas/comments.schemas";

const createCommentService = async (
  commentData: TCommentRequest,
  userId: number,
  advertId: number
): Promise<TComment> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  const foundUser: TUser = userSchema.parse(user);

  const advertRepository: Repository<Advert> =
    AppDataSource.getRepository(Advert);

  const advert: Advert | null = await advertRepository.findOne({
    where: {
      id: advertId,
    },
  });

  if (!advert) {
    throw new AppError("Advert not Found", 404);
  }

  const foundAdvert: TAdvert = advertSchema.parse(advert);

  const newCommentData = {
    ...commentData,
    user: foundUser,
    advert: foundAdvert,
  };

  const commentRepository: Repository<Comment> =
    AppDataSource.getRepository(Comment);

  const comment = commentRepository.create(newCommentData);

  await commentRepository.save(comment);

  const returnComment: TComment = commentSchema.parse(comment);

  return returnComment;
};

export default createCommentService;
