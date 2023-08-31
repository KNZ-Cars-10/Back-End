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
const createSession_service_1 = __importDefault(require("../Services/login/createSession.service"));
const login_schemas_1 = require("../schemas/login.schemas");
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = login_schemas_1.resquestLoginSchema.parse(req.body);
    const token = yield (0, createSession_service_1.default)(userData);
    return res.status(200).json(token);
});
exports.default = loginController;
