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
exports.deleteCommentController = exports.updateCommentbyIdController = exports.listCommentbyIdController = exports.listAllCommentsController = exports.createCommentController = void 0;
const createComments_service_1 = __importDefault(require("../Services/comments/createComments.service"));
const listComments_service_1 = require("../Services/comments/listComments.service");
const listCommentById_service_1 = __importDefault(require("../Services/comments/listCommentById.service"));
const updateCommentById_service_1 = __importDefault(require("../Services/comments/updateCommentById.service"));
const deleteComments_service_1 = __importDefault(require("../Services/comments/deleteComments.service"));
const createCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const commentData = req.body;
    const userId = res.locals.sub;
    const advertId = parseInt(req.params.advertId);
    const createdComment = yield (0, createComments_service_1.default)(commentData, userId, advertId);
    return res.status(201).json(createdComment);
});
exports.createCommentController = createCommentController;
const listAllCommentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Comments = yield (0, listComments_service_1.listCommentsService)();
    return res.json(Comments);
});
exports.listAllCommentsController = listAllCommentsController;
const listCommentbyIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const commentId = parseInt(req.params.commentId);
    const comment = yield (0, listCommentById_service_1.default)(commentId);
    return res.json(comment);
});
exports.listCommentbyIdController = listCommentbyIdController;
const updateCommentbyIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const commentId = parseInt(req.params.commentId);
    const commentData = req.body;
    const Comment = yield (0, updateCommentById_service_1.default)(commentId, commentData);
    return res.json(Comment);
});
exports.updateCommentbyIdController = updateCommentbyIdController;
const deleteCommentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const commentId = parseInt(req.params.commentId);
    yield (0, deleteComments_service_1.default)(commentId);
    return res.status(204).send();
});
exports.deleteCommentController = deleteCommentController;
