import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("ContactUs")
export class ContactUs {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  link?: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at!: Date;
}
