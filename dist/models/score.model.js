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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Score = class Score extends sequelize_typescript_1.Model {
};
exports.Score = Score;
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Score.prototype, "player_id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Score.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Score.prototype, "score", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Score.prototype, "app_id", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.Column)({ field: 'created_at' }),
    __metadata("design:type", Date)
], Score.prototype, "created_at", void 0);
exports.Score = Score = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'leaderboard', timestamps: false })
], Score);
//# sourceMappingURL=score.model.js.map