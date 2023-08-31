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
exports.checkUserEmailController = exports.listUserbyIdController = exports.deleteUserController = exports.updateUserController = exports.listAllUserController = exports.createUserController = void 0;
const createUsers_service_1 = __importDefault(require("../Services/users/createUsers.service"));
const listUsers_service_1 = __importDefault(require("../Services/users/listUsers.service"));
const deleteUsers_service_1 = __importDefault(require("../Services/users/deleteUsers.service"));
const listUserById_service_1 = __importDefault(require("../Services/users/listUserById.service"));
const updateUsers_service_1 = __importDefault(require("../Services/users/updateUsers.service"));
const users_schemas_1 = require("../schemas/users.schemas");
const checkUserEmail_service_1 = __importDefault(require("../Services/users/checkUserEmail.service"));
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const words = req.body.name.split(" ");
    const initials = words
        .map((word) => word.charAt(0).toUpperCase())
        .slice(0, 2)
        .join("");
    let userData = Object.assign(Object.assign({}, req.body), { avatar: null, resetToken: null, inicial: initials });
    const newUserData = users_schemas_1.userSchemaServiceRegister.parse(userData);
    const createdUser = yield (0, createUsers_service_1.default)(newUserData);
    return res.status(201).json(createdUser);
});
exports.createUserController = createUserController;
const listAllUserController = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, listUsers_service_1.default)();
    return res.json(users);
});
exports.listAllUserController = listAllUserController;
const updateUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId);
    const userDataRequest = req.body;
    const updatedUser = yield (0, updateUsers_service_1.default)(userId, userDataRequest);
    return res.json(updatedUser);
});
exports.updateUserController = updateUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId);
    yield (0, deleteUsers_service_1.default)(userId);
    return res.status(204).send();
});
exports.deleteUserController = deleteUserController;
const listUserbyIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.userId);
    const user = yield (0, listUserById_service_1.default)(userId);
    return res.json(user);
});
exports.listUserbyIdController = listUserbyIdController;
const checkUserEmailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    const userExist = yield (0, checkUserEmail_service_1.default)(email);
    return res.json({ exists: userExist });
});
exports.checkUserEmailController = checkUserEmailController;
