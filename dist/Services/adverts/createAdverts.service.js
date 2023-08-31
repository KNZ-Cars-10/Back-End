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
const adverts_entities_1 = __importDefault(require("../../entities/adverts.entities"));
const adverts_schemas_1 = require("../../schemas/adverts.schemas");
const error_1 = require("../../error");
const createAdvertService = (advertData, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.default);
    const user = yield userRepository.findOne({
        where: {
            id: userId,
        },
    });
    if (!user) {
        throw new error_1.AppError("User not found", 404);
    }
    const foundUser = users_schemas_1.userSchema.parse(user);
    const newAdvertData = Object.assign(Object.assign({}, advertData), { user: foundUser });
    const advertRepository = data_source_1.AppDataSource.getRepository(adverts_entities_1.default);
    const advert = advertRepository.create(newAdvertData);
    yield advertRepository.save(advert);
    const returnAdvert = adverts_schemas_1.advertSchemaResponse.parse(advert);
    const newUserData = userRepository.create(Object.assign(Object.assign({}, user), { is_advertiser: true }));
    yield userRepository.save(newUserData);
    return returnAdvert;
});
exports.default = createAdvertService;
