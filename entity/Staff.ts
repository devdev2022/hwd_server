import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("Staff")
export class Staff {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ nullable: true })
  link?: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at!: Date;
}
