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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderboardService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const score_model_1 = require("../models/score.model");
let LeaderboardService = class LeaderboardService {
    constructor(scoreModel) {
        this.scoreModel = scoreModel;
    }
    async submitScore(player_id, name, score, app_id) {
        return this.scoreModel.create({ player_id, name, score, app_id });
    }
    async getTopScores(limit = 5) {
        return this.scoreModel.findAll({
            order: [['score', 'DESC']],
            limit,
        });
    }
    async getUserBestScore(player_id) {
        const bestScore = await this.scoreModel.findOne({
            where: { player_id },
            order: [['score', 'DESC']],
        });
        return bestScore
            ? bestScore
            : { error: 'No scores found for this player_id!' };
    }
    async getUserScores(player_id) {
        return this.scoreModel.findAll({
            where: { player_id },
            order: [['created_at', 'DESC']],
        });
    }
};
exports.LeaderboardService = LeaderboardService;
exports.LeaderboardService = LeaderboardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(score_model_1.Score)),
    __metadata("design:paramtypes", [Object])
], LeaderboardService);
//# sourceMappingURL=leaderboard.service.js.map