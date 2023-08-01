import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";

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

  @Column({ type: "varchar", length: 2 })
  price: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar", nullable: true })
  cover_image: string | null;

  @Column({ type: "varchar", nullable: true })
  first_image: string | null;

  @Column({ type: "varchar", nullable: true })
  second_image: string | null;

  @CreateDateColumn({ type: "date" })
  createdAt?: Date | string;
}

export default Advert;
