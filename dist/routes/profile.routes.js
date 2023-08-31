"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checkParameterUserId_middleware_1 = __importDefault(require("../middlewares/checkParameterUserId.middleware"));
const profile_controllers_1 = require("../controllers/profile.controllers");
const checkRequestBody_middleware_1 = __importDefault(require("../middlewares/checkRequestBody.middleware"));
const users_schemas_1 = require("../schemas/users.schemas");
const checkEmailUser_middleware_1 = __importDefault(require("../middlewares/checkEmailUser.middleware"));
const ensureTokenExistis_middleware_1 = __importDefault(require("../middlewares/ensureTokenExistis.middleware"));
const profileRoutes = (0, express_1.Router)();
profileRoutes.get("", ensureTokenExistis_middleware_1.default, checkParameterUserId_middleware_1.default, profile_controllers_1.listProfilebyIdController);
profileRoutes.patch("", ensureTokenExistis_middleware_1.default, checkParameterUserId_middleware_1.default, checkEmailUser_middleware_1.default, (0, checkRequestBody_middleware_1.default)(users_schemas_1.updateUserSchema), profile_controllers_1.updateProfileController);
profileRoutes.delete("", ensureTokenExistis_middleware_1.default, checkParameterUserId_middleware_1.default, profile_controllers_1.deleteProfileController);
exports.default = profileRoutes;
