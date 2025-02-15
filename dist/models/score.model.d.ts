import { Model } from 'sequelize-typescript';
export declare class Score extends Model<Score> {
    player_id: string;
    name: string;
    score: number;
    app_id: string;
    created_at: Date;
}
