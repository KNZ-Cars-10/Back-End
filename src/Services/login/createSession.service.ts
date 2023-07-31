import "dotenv/config";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../error";
import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import {
  TLoginRequest,
  TLoginResponse,
} from "../../Interfaces/login.interfaces";
import User from "../../Entities/users.entities";

const createSessionService = async (
  loginData: TLoginRequest
): Promise<TLoginResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: {
      email: loginData.email,
    },
  });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const comparePassword: boolean = await bcrypt.compare(
    loginData.password,
    user.password
  );

  if (comparePassword === false) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {},
    process.env.SECRET_KEY!,

    {
      expiresIn: process.env.EXPIRES_IN!,
      subject: user.id.toString(),
    }
  );

  return { token };
};

export default createSessionService;
