import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveLentghfield1690987363044 implements MigrationInterface {
    name = 'RemoveLentghfield1690987363044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "price" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "price" character varying(2) NOT NULL`);
    }

}
