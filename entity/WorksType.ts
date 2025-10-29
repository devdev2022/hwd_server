import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("WorksTypes")
export class WorksType {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
}
