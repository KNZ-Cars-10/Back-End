import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import User from "./users.entities";

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

  @Column({ type: "varchar", nullable: true })
  first_image: string | null;

  @Column({ type: "varchar", nullable: true })
  second_image: string | null;

  @ManyToOne(() => User, (user) => user.adverts, { onDelete: "CASCADE" })
  user: User;
}

export default Advert;
