"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const adverts_entities_1 = __importDefault(require("./adverts.entities"));
const users_entities_1 = __importDefault(require("./users.entities"));
let Comment = class Comment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], Comment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Comment.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "varchar" }),
    __metadata("design:type", String)
], Comment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => adverts_entities_1.default, (advert) => advert.comments, { onDelete: "CASCADE" }),
    __metadata("design:type", adverts_entities_1.default)
], Comment.prototype, "advert", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entities_1.default, (user) => user.comments, { onDelete: "CASCADE" }),
    __metadata("design:type", users_entities_1.default)
], Comment.prototype, "user", void 0);
Comment = __decorate([
    (0, typeorm_1.Entity)("comments")
], Comment);
exports.default = Comment;
