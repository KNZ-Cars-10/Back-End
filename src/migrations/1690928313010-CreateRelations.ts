import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelations1690928313010 implements MigrationInterface {
    name = 'CreateRelations1690928313010'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adverts" ("id" SERIAL NOT NULL, "brand" character varying NOT NULL, "model" character varying NOT NULL, "year" character varying NOT NULL, "fuel" character varying NOT NULL, "mileage" character varying NOT NULL, "color" character varying NOT NULL, "price_FIPE" character varying NOT NULL, "price" character varying(2) NOT NULL, "description" character varying NOT NULL, "cover_image" character varying, "first_image" character varying, "second_image" character varying, "createdAt" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_36876931b51109a932d0bf3b40a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "phone" character varying NOT NULL, "birth_date" date NOT NULL, "description" character varying NOT NULL, "zip_code" character varying NOT NULL, "state" character varying(2) NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "complement" character varying, "is_advertise" boolean NOT NULL, "password" character varying NOT NULL, "confirm_password" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP CONSTRAINT "FK_80a023b502ad7957fb8d470e4e2"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "adverts"`);
    }

}
