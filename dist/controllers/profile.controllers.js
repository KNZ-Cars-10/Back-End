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
exports.deleteProfileController = exports.updateProfileController = exports.listProfilebyIdController = void 0;
const listUserById_service_1 = __importDefault(require("../Services/users/listUserById.service"));
const deleteUsers_service_1 = __importDefault(require("../Services/users/deleteUsers.service"));
const updateUsers_service_1 = __importDefault(require("../Services/users/updateUsers.service"));
const listProfilebyIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.sub;
    const user = yield (0, listUserById_service_1.default)(userId);
    return res.json(user);
});
exports.listProfilebyIdController = listProfilebyIdController;
const updateProfileController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.sub;
    const userDatarequest = req.body;
    const updatedUser = yield (0, updateUsers_service_1.default)(userId, userDatarequest);
    return res.json(updatedUser);
});
exports.updateProfileController = updateProfileController;
const deleteProfileController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = res.locals.sub;
    yield (0, deleteUsers_service_1.default)(userId);
    return res.status(204).send();
});
exports.deleteProfileController = deleteProfileController;
