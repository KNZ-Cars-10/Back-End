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
const checkParameterUserId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let userId = parseInt(req.params.userId);
    if (!userId) {
        userId = res.locals.sub;
    }
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.default);
    const user = yield userRepository.findOne({
        where: {
            id: userId,
        },
    });
    if (!user) {
        throw new error_1.AppError("User not found", 404);
    }
    res.locals.user = user;
    return next();
});
exports.default = checkParameterUserId;
