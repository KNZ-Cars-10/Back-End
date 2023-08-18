import { MigrationInterface, QueryRunner } from "typeorm";

export class AddInicialFields1692121419177 implements MigrationInterface {
    name = 'AddInicialFields1692121419177'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "inicial" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "inicial"`);
    }

}
