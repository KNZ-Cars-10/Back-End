"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = exports.app = void 0;
require("reflect-metadata");
require("express-async-errors");
const express_1 = __importStar(require("express"));
const error_1 = require("./error");
const cors_1 = __importDefault(require("cors"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const login_routes_1 = __importDefault(require("./routes/login.routes"));
const adverts_routes_1 = __importDefault(require("./routes/adverts.routes"));
const profile_routes_1 = __importDefault(require("./routes/profile.routes"));
const comments_routes_1 = __importDefault(require("./routes/comments.routes"));
const recoverPassword_routes_1 = __importDefault(require("./routes/recoverPassword.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
app.use((0, express_1.json)());
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const transporter = nodemailer_1.default.createTransport({
    service: "gmail",
    auth: {
        user: process.env.BASE_EMAIL,
        pass: process.env.BASE_EMAIL_PASSWORD,
    },
});
exports.transporter = transporter;
app.use("/users", users_routes_1.default);
app.use("/login", login_routes_1.default);
app.use("/adverts", adverts_routes_1.default);
app.use("/profile", profile_routes_1.default);
app.use("/comment", comments_routes_1.default);
app.use("/recover-password", recoverPassword_routes_1.default);
app.use(express_1.default.static("documentation"));
app.use(error_1.handleErrors);
