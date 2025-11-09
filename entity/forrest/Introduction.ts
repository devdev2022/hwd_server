import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("Introduction")
export class Introduction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  content!: string;

  @Column()
  thumbnail!: string;

  @Column()
  cover_img!: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at!: Date;
}

export default Introduction;
