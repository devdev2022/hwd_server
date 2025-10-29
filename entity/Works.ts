import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("Works")
export class Works {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  category!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  link?: string;

  @Column()
  type!: number;

  @CreateDateColumn({ type: "timestamp" })
  created_at!: Date;
}
