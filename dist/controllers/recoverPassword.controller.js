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
exports.resetPasswordController = exports.sendTokenController = void 0;
const resetPassword_service_1 = __importDefault(require("../Services/recoverPassword/resetPassword.service"));
const sendToken_service_1 = __importDefault(require("../Services/recoverPassword/sendToken.service"));
const sendTokenController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const recoveryPasswordURL = yield (0, sendToken_service_1.default)(email);
    return res.json({ recoveryPasswordURL: recoveryPasswordURL });
});
exports.sendTokenController = sendTokenController;
const resetPasswordController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.params.token;
    const newPassword = req.body.newPassword;
    yield (0, resetPassword_service_1.default)(token, newPassword);
    return res.status(200).json({ message: "Senha redefinida com sucesso!" });
});
exports.resetPasswordController = resetPasswordController;
