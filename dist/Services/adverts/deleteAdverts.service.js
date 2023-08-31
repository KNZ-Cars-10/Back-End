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
const adverts_entities_1 = __importDefault(require("../../entities/adverts.entities"));
const users_entities_1 = __importDefault(require("../../entities/users.entities"));
const deleteAdvertService = (advertId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const advertRepository = data_source_1.AppDataSource.getRepository(adverts_entities_1.default);
    const userRepository = data_source_1.AppDataSource.getRepository(users_entities_1.default);
    const advert = yield advertRepository.findOne({
        where: {
            id: advertId,
        },
        relations: {
            user: {
                adverts: true,
            },
        },
    });
    const userId = advert === null || advert === void 0 ? void 0 : advert.user.id;
    const user = yield userRepository.findOne({
        where: {
            id: userId,
        },
        relations: {
            adverts: true,
        },
    });
    if (((_a = user === null || user === void 0 ? void 0 : user.adverts) === null || _a === void 0 ? void 0 : _a.length) <= 1) {
        const newUserData = userRepository.create(Object.assign(Object.assign({}, user), { is_advertiser: false }));
        yield userRepository.save(newUserData);
    }
    yield advertRepository.remove(advert);
});
exports.default = deleteAdvertService;
