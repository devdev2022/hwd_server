import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("SnsImg")
export class SnsImg {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  link!: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at!: Date;
}

export default SnsImg;
