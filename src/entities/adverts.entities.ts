import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import User from "./users.entities";

@Entity("adverts")
class Advert {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  brand: string;

  @Column({ type: "varchar" })
  model: string;

  @Column({ type: "int" })
  year: number;

  @Column({ type: "varchar" })
  fuel: string;

  @Column({ type: "int" })
  mileage: number;

  @Column({ type: "varchar" })
  color: string;

  @Column({ type: "int" })
  price_FIPE: number;

  @Column({ type: "int" })
  price: number;

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
