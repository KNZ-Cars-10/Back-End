import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1692383074349 implements MigrationInterface {
    name = 'InitialMigration1692383074349'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "createdAt" character varying NOT NULL DEFAULT now(), "advertId" integer, "userId" integer, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_advertise"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "confirm_password"`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "first_image"`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "second_image"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "inicial" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "is_advertiser" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "color" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" character varying NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "avatar" character varying`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "status" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "createdAt" character varying NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "year" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "mileage"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "mileage" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "price_FIPE"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "price_FIPE" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "price" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_c870c44a72a624e88130b663fc2" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_c870c44a72a624e88130b663fc2"`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "price_FIPE"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "price_FIPE" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "mileage"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "mileage" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "year" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "color"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_advertiser"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "inicial"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "second_image" character varying`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "first_image" character varying`);
        await queryRunner.query(`ALTER TABLE "users" ADD "confirm_password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "is_advertise" boolean NOT NULL`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}
