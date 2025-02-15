import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Score } from 'src/models/score.model';

@Injectable()
export class LeaderboardService {
  constructor(
    @InjectModel(Score)
    private readonly scoreModel: typeof Score,
  ) {}

  async submitScore(
    player_id: string,
    name: string,
    score: number,
    app_id: string,
  ) {
    return this.scoreModel.create({ player_id, name, score, app_id } as Score);
  }

  async getTopScores(limit = 5) {
    return this.scoreModel.findAll({
      order: [['score', 'DESC']],
      limit,
    });
  }

  async getUserBestScore(player_id: string) {
    const bestScore = await this.scoreModel.findOne({
      where: { player_id },
      order: [['score', 'DESC']],
    });
    return bestScore
      ? bestScore
      : { error: 'No scores found for this player_id!' };
  }

  async getUserScores(player_id: string) {
    return this.scoreModel.findAll({
      where: { player_id },
      order: [['created_at', 'DESC']],
    });
  }
}
