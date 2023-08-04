import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";

import { getRounds, hashSync } from "bcryptjs";
import Advert from "./adverts.entities";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar", unique: true })
  email: string;

  @Column({ type: "varchar" })
  cpf: string;

  @Column({ type: "varchar" })
  phone: string;

  @Column({ type: "date" })
  birth_date: string;

  @Column({ type: "varchar" })
  description: string;

  @Column({ type: "varchar" })
  zip_code: string;

  @Column({ type: "varchar", length: 2 })
  state: string;

  @Column({ type: "varchar" })
  city: string;

  @Column({ type: "varchar" })
  street: string;

  @Column({ type: "int" })
  number: number;

  @Column({ type: "varchar", nullable: true })
  complement: string | null;

  @Column()
  is_advertise: boolean;

  @Column({ type: "varchar" })
  password: string;

  @Column({ type: "varchar" })
  confirm_password: string;

  @OneToMany(() => Advert, (advert) => advert.user, { nullable: true })
  adverts: Advert[] | null | undefined;

  @BeforeInsert()
  @BeforeUpdate()
  hash() {
    const newPassword = getRounds(this.password);
    if (!newPassword) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default User;
