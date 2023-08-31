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
const comments_entities_1 = __importDefault(require("../entities/comments.entities"));
const checkParameterCommentId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const commentId = parseInt(req.params.commentId);
    const commentRepository = data_source_1.AppDataSource.getRepository(comments_entities_1.default);
    const comment = yield commentRepository.findOne({
        where: {
            id: commentId,
        },
        relations: {
            user: true,
        },
    });
    if (!comment) {
        throw new error_1.AppError("Comment not found", 404);
    }
    res.locals.commentUser = comment.user;
    return next();
});
exports.default = checkParameterCommentId;
