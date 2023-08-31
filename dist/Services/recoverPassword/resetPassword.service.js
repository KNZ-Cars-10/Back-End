"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_entities_1 = __importDefault(require("../../entities/users.entities"));
const data_source_1 = require("../../data-source");
const error_1 = require("../../error");
// import { AppError } from "../../error";
const resetPasswordService = (token, newPassword) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.default);
    // try {
    // const decodedToken: any = jwt.verify(
    //   token,
    //   process.env.SECRET_KEY_RECOVER_PASSWORD!
    // );
    const user = yield userRepository.findOne({
        where: {
            // id: decodedToken.userId,
            resetToken: token,
        },
    });
    if (!user) {
        throw new error_1.AppError("Usuário não encontrado.");
    }
    const newUserData = userRepository.create(Object.assign(Object.assign({}, user), { resetToken: null, password: newPassword }));
    const returnUser = yield userRepository.save(newUserData);
    return returnUser;
    // user.password = newPassword;
    // user.resetToken = null;
    // await userRepository.save(user);
    // return true;
    // } catch (error) {
    //   console.error(error);
    //   throw new AppError("Ocorreu um erro ao redefinir a senha.", 404);
    // }
});
exports.default = resetPasswordService;
