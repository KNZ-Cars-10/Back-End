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
const error_1 = require("../error");
const data_source_1 = require("../data-source");
const users_entities_1 = __importDefault(require("../entities/users.entities"));
const checkEmailUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const emailName = req.body.email;
    if (!emailName) {
        return next();
    }
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.default);
    const email = yield userRepository.findOne({
        where: {
            email: emailName,
        },
    });
    if (email) {
        throw new error_1.AppError("Email already exists", 409);
    }
    else {
        return next();
    }
});
exports.default = checkEmailUser;