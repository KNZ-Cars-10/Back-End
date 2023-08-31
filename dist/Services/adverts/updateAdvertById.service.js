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
const adverts_schemas_1 = require("../../schemas/adverts.schemas");
const updateAdvertService = (advertId, advertData) => __awaiter(void 0, void 0, void 0, function* () {
    const advertRepository = data_source_1.AppDataSource.getRepository(adverts_entities_1.default);
    const oldAdvertData = yield advertRepository.findOne({
        where: {
            id: advertId,
        },
        relations: {
            user: true,
        },
    });
    const newAdvertData = advertRepository.create(Object.assign(Object.assign({}, oldAdvertData), advertData));
    yield advertRepository.save(newAdvertData);
    const returnAdvert = adverts_schemas_1.advertSchemaResponse.parse(newAdvertData);
    return returnAdvert;
});
exports.default = updateAdvertService;
