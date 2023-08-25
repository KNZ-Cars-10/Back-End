import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import User from "./users.entities";
import Comment from "./comments.entities";

@Entity("adverts")
class Advert {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  brand: string;

  @Column({ type: "varchar" })
  model: string;

  @Column({ type: "varchar" })
  year: string;

  @Column({ type: "varchar" })
  fuel: string;

  @Column({ type: "varchar" })
  mileage: string;

  @Column({ type: "varchar" })
  color: string;

  @Column({ type: "varchar" })
  price_FIPE: string;

  @Column({ type: "varchar" })
  price: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar", nullable: true })
  cover_image: string | null;

  @Column()
  status: boolean;

  @Column({ type: "json", default: [] })
  other_images: string[] | undefined | null;

  @CreateDateColumn({ type: "varchar" })
  createdAt: string;

  @ManyToOne(() => User, (user) => user.adverts, { onDelete: "CASCADE" })
  user: User;

  @OneToMany(() => Comment, (comment) => comment.advert, { nullable: true })
  comments: Comment[] | null | undefined;
}

export default Advert;
