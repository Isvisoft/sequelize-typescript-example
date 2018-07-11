import {
  PrimaryKey, Model, Table, Column,
  CreatedAt, UpdatedAt
} from "sequelize-typescript";


@Table
export class Genre extends Model<Genre> {

  @PrimaryKey
  @Column
  name: string;

  @CreatedAt
  @Column
  createdAt: Date;

  @UpdatedAt
  @Column
  updatedAt: Date;
}
