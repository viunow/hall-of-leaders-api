import { Column, Model, Table, CreatedAt } from 'sequelize-typescript';

@Table({ tableName: 'leaderboard', timestamps: false })
export class Score extends Model<Score> {
  @Column
  player_id: string;

  @Column
  name: string;

  @Column
  score: number;

  @Column
  app_id: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  created_at: Date;
}
