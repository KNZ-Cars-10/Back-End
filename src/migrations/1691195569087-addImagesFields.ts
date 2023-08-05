import { MigrationInterface, QueryRunner } from "typeorm";

export class AddImagesFields1691195569087 implements MigrationInterface {
    name = 'AddImagesFields1691195569087'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" ADD "other_images" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" DROP COLUMN "other_images"`);
    }

}
