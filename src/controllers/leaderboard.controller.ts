import { Controller, Post, Get, Body, Param, Headers } from '@nestjs/common';
import { LeaderboardService } from 'src/services/leaderboard.service';

@Controller('leaderboard')
export class LeaderboardController {
  constructor(private readonly leaderboardService: LeaderboardService) {}

  @Post('submit')
  async submitScore(
    @Body()
    {
      player_id,
      name,
      score,
    }: { player_id: string; name: string; score: number },
    @Headers('x-app-id') app_id: string,
  ) {
    if (!app_id) return { error: 'Missing App ID' };
    return this.leaderboardService.submitScore(player_id, name, score, app_id);
  }

  @Get('top')
  async getTopScores() {
    return this.leaderboardService.getTopScores();
  }

  @Get(':player_id/best')
  async getUserBestScore(@Param('player_id') player_id: string) {
    return this.leaderboardService.getUserBestScore(player_id);
  }

  @Get(':player_id/scores')
  async getUserScores(@Param('player_id') player_id: string) {
    return this.leaderboardService.getUserScores(player_id);
  }
}
