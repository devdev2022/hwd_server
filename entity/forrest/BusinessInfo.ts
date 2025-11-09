import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("BusinessInfo")
export class BusinessInfo {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  ceo_name!: string;

  @Column()
  business_name!: string;

  @Column()
  business_number!: string;

  @Column()
  business_address!: string;

  @Column({ nullable: true })
  fax_number!: string;

  @Column({ nullable: true })
  email_address!: string;

  @Column({ nullable: true })
  instagram_link!: string;

  @Column({ nullable: true })
  blog_link!: string;

  @Column()
  contact_number!: string;

  @Column()
  phone_number!: string;

  @CreateDateColumn({ type: "timestamp" })
  register_date!: Date;
}
