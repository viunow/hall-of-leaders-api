import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LeaderboardController } from 'src/controllers/leaderboard.controller';
import { LeaderboardService } from 'src/services/leaderboard.service';
import { Score } from 'src/models/score.model';

@Module({
  imports: [SequelizeModule.forFeature([Score])], // Registra o modelo Score no Sequelize
  controllers: [LeaderboardController], // Registra o controller
  providers: [LeaderboardService], // Registra o serviço
  exports: [LeaderboardService], // Exporta o serviço caso precise ser usado em outro módulo
})
export class LeaderboardModule {}
