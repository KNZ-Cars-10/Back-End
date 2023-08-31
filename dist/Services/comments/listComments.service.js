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
exports.listCommentsService = void 0;
const data_source_1 = require("../../data-source");
const comments_entities_1 = __importDefault(require("../../entities/comments.entities"));
const comments_schemas_1 = require("../../schemas/comments.schemas");
const listCommentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const commentRepository = data_source_1.AppDataSource.getRepository(comments_entities_1.default);
    const comments = yield commentRepository.find({
        relations: {
            advert: true,
            user: true,
        },
    });
    const foundComment = comments_schemas_1.commentsSchema.parse(comments);
    return foundComment;
});
exports.listCommentsService = listCommentsService;
