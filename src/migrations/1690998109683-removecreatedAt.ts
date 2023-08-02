import { MigrationInterface, QueryRunner } from "typeorm";

export class RemovecreatedAt1690998109683 implements MigrationInterface {
    name = 'RemovecreatedAt1690998109683'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "createdAt" date NOT NULL DEFAULT now()`);
    }

}
