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
const app_1 = require("../../app");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const uuid_1 = require("uuid");
const resetTokenService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.default);
    const user = yield userRepository.findOne({
        where: { email },
    });
    if (!user) {
        return false;
    }
    const resetToken = jsonwebtoken_1.default.sign({ userId: user.id, random: (0, uuid_1.v4)() }, process.env.SECRET_KEY_RECOVER_PASSWORD, {
        expiresIn: "1h",
    });
    user.resetToken = resetToken;
    yield userRepository.save(user);
    const mailOptions = {
        from: process.env.BASE_EMAIL,
        to: email,
        subject: "Recuperação de Senha",
        text: `Clique no link para redefinir sua senha: ${process.env
            .BASE_URL}/recover-password/${resetToken}`,
    };
    yield app_1.transporter.sendMail(mailOptions);
    return resetToken;
});
exports.default = resetTokenService;
