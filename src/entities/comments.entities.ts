import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Advert from "./adverts.entities";
import User from "./users.entities";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  text: string;

  @CreateDateColumn({ type: "varchar" })
  createdAt: string;

  @ManyToOne(() => Advert, (advert) => advert.comments, { onDelete: "CASCADE" })
  advert: Advert;

  @ManyToOne(() => User, (user) => user.comments, { onDelete: "CASCADE" })
  user: User;
}

export default Comment;
