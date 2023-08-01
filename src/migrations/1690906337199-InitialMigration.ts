import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1690906337199 implements MigrationInterface {
    name = 'InitialMigration1690906337199'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "phone" character varying NOT NULL, "birth_date" date NOT NULL, "description" character varying NOT NULL, "zip_code" character varying NOT NULL, "state" character varying(2) NOT NULL, "city" character varying NOT NULL, "street" character varying NOT NULL, "number" character varying NOT NULL, "complement" character varying, "is_advertise" boolean NOT NULL, "password" character varying NOT NULL, "confirm_password" character varying NOT NULL, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
