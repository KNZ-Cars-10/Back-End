import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAdvertsTables1690925936745 implements MigrationInterface {
    name = 'CreateAdvertsTables1690925936745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adverts" ("id" SERIAL NOT NULL, "brand" character varying NOT NULL, "model" character varying NOT NULL, "year" character varying NOT NULL, "fuel" character varying NOT NULL, "mileage" character varying NOT NULL, "color" character varying NOT NULL, "price_FIPE" character varying NOT NULL, "price" character varying(2) NOT NULL, "description" character varying NOT NULL, "cover_image" character varying, "first_image" character varying, "second_image" character varying, "createdAt" date NOT NULL DEFAULT now(), CONSTRAINT "PK_36876931b51109a932d0bf3b40a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "adverts"`);
    }

}
