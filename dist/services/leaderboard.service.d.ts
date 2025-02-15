import { Score } from 'src/models/score.model';
export declare class LeaderboardService {
    private readonly scoreModel;
    constructor(scoreModel: typeof Score);
    submitScore(player_id: string, name: string, score: number, app_id: string): Promise<Score>;
    getTopScores(limit?: number): Promise<Score[]>;
    getUserBestScore(player_id: string): Promise<Score | {
        error: string;
    }>;
    getUserScores(player_id: string): Promise<Score[]>;
}
