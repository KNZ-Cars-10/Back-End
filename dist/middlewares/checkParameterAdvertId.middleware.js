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
const adverts_entities_1 = __importDefault(require("../entities/adverts.entities"));
const checkParameterAdvertId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const advertId = parseInt(req.params.advertId);
    const advertRepository = data_source_1.AppDataSource.getRepository(adverts_entities_1.default);
    const advert = yield advertRepository.findOne({
        where: {
            id: advertId,
        },
        relations: {
            user: true,
        },
    });
    if (!advert) {
        throw new error_1.AppError("Advert not found", 404);
    }
    res.locals.advertUser = advert.user;
    return next();
});
exports.default = checkParameterAdvertId;
