import { LeaderboardService } from 'src/services/leaderboard.service';
export declare class LeaderboardController {
    private readonly leaderboardService;
    constructor(leaderboardService: LeaderboardService);
    submitScore({ player_id, name, score, }: {
        player_id: string;
        name: string;
        score: number;
    }, app_id: string): Promise<import("../models/score.model").Score | {
        error: string;
    }>;
    getTopScores(): Promise<import("../models/score.model").Score[]>;
    getUserBestScore(player_id: string): Promise<import("../models/score.model").Score | {
        error: string;
    }>;
    getUserScores(player_id: string): Promise<import("../models/score.model").Score[]>;
}
