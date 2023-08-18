import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeNumbersToString1692282228471 implements MigrationInterface {
    name = 'ChangeNumbersToString1692282228471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_c870c44a72a624e88130b663fc2"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
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
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_c870c44a72a624e88130b663fc2" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
