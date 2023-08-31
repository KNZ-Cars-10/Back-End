"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
require("dotenv/config");
const error_1 = require("./error");
if (!process.env.CLOUD_NAME ||
    !process.env.API_KEY ||
    !process.env.API_SECRET) {
    throw new error_1.AppError("As variáveis de ambiente do Cloudinary não foram configuradas corretamente.");
}
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
exports.default = cloudinary_1.v2;
