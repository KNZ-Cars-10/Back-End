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
const data_source_1 = require("../../data-source");
const users_entities_1 = __importDefault(require("../../entities/users.entities"));
const users_schemas_1 = require("../../schemas/users.schemas");
const updateUserService = (userId, userData) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.default);
    const oldUserData = yield userRepository.findOneBy({
        id: userId,
    });
    let newUserData = userRepository.create(Object.assign(Object.assign({}, oldUserData), userData));
    if (userData.name) {
        const words = userData.name.split(" ");
        const initials = words
            .map((word) => word.charAt(0).toUpperCase())
            .slice(0, 2)
            .join("");
        newUserData.inicial = initials;
    }
    yield userRepository.save(newUserData);
    const returnUser = users_schemas_1.userSchema.parse(newUserData);
    return returnUser;
});
exports.default = updateUserService;
