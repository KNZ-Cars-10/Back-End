import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import User from "../../entities/users.entities";

const checkUserEmailService = async (email: string): Promise<boolean> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOne({
    where: { email },
  });

  let userExist = false;

  if (user) {
    userExist = true;
  }

  return userExist;
};

// const { email } = emailCheckSchema.parse(req.params);

// const userRepository = getConnection().getRepository(User);
// const user = await userRepository.findOne({ email });

// if (user) {
//   res.json({ exists: true });
// } else {
//   res.json({ exists: false });
// }

export default checkUserEmailService;
