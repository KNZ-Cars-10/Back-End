import { MigrationInterface, QueryRunner } from "typeorm";

export class AddImagesFields1691195629138 implements MigrationInterface {
    name = 'AddImagesFields1691195629138'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "other_images"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "other_images" json`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "other_images"`);
        await queryRunner.query(`ALTER TABLE "adverts" ADD "other_images" character varying`);
    }

}
