"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const recoverPassword_controller_1 = require("../controllers/recoverPassword.controller");
const checkRequestBody_middleware_1 = __importDefault(require("../middlewares/checkRequestBody.middleware"));
const resetPassword_schemas_1 = require("../schemas/resetPassword.schemas");
const recoverPasswordRouter = (0, express_1.Router)();
recoverPasswordRouter.post("/forgot-password", (0, checkRequestBody_middleware_1.default)(resetPassword_schemas_1.emailSchema), recoverPassword_controller_1.sendTokenController);
recoverPasswordRouter.post("/:token", (0, checkRequestBody_middleware_1.default)(resetPassword_schemas_1.resetPasswordSchema), recoverPassword_controller_1.resetPasswordController);
exports.default = recoverPasswordRouter;
