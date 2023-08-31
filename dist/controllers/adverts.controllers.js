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
exports.generateURLImage = exports.deleteAdvertController = exports.updateAdvertbyIdController = exports.listAdvertbyIdController = exports.listAllAdvertsController = exports.createAdvertController = void 0;
const createAdverts_service_1 = __importDefault(require("../Services/adverts/createAdverts.service"));
const listAdverts_service_1 = __importDefault(require("../Services/adverts/listAdverts.service"));
const listAdvertById_service_1 = __importDefault(require("../Services/adverts/listAdvertById.service"));
const updateAdvertById_service_1 = __importDefault(require("../Services/adverts/updateAdvertById.service"));
const deleteAdverts_service_1 = __importDefault(require("../Services/adverts/deleteAdverts.service"));
const parser_1 = __importDefault(require("datauri/parser"));
const cloudinaryConfig_1 = __importDefault(require("../cloudinaryConfig"));
const createAdvertController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertData = Object.assign(Object.assign({}, req.body), { other_images: [] });
    const userId = res.locals.sub;
    const createdAdvert = yield (0, createAdverts_service_1.default)(advertData, userId);
    return res.status(201).json(createdAdvert);
});
exports.createAdvertController = createAdvertController;
const listAllAdvertsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const brand = req.query.brand;
    const model = req.query.model;
    const year = req.query.year;
    const fuel = req.query.fuel;
    const color = req.query.color;
    let mileage = req.query.mileage;
    let price = req.query.price;
    if (price) {
        price = parseInt(price);
        price = price + 1;
    }
    if (mileage) {
        mileage = parseInt(mileage);
        mileage = mileage + 1;
    }
    if (mileage == null) {
        mileage = "9000000000";
    }
    if (price == null) {
        price = "9000000000";
    }
    const adverts = yield (0, listAdverts_service_1.default)(brand, model, year, fuel, mileage, color, price);
    return res.json(adverts);
});
exports.listAllAdvertsController = listAllAdvertsController;
const listAdvertbyIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertId = parseInt(req.params.advertId);
    const advert = yield (0, listAdvertById_service_1.default)(advertId);
    return res.json(advert);
});
exports.listAdvertbyIdController = listAdvertbyIdController;
const updateAdvertbyIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertId = parseInt(req.params.advertId);
    const advertData = req.body;
    const advert = yield (0, updateAdvertById_service_1.default)(advertId, advertData);
    return res.json(advert);
});
exports.updateAdvertbyIdController = updateAdvertbyIdController;
const deleteAdvertController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const advertId = parseInt(req.params.advertId);
    yield (0, deleteAdverts_service_1.default)(advertId);
    return res.status(204).send();
});
exports.deleteAdvertController = deleteAdvertController;
const generateURLImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parse = new parser_1.default();
    const result = yield cloudinaryConfig_1.default.uploader.upload(String(parse.format("image", req.file.buffer).content));
    return res.json(result);
});
exports.generateURLImage = generateURLImage;
