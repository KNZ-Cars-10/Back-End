import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMigration1692579300573 implements MigrationInterface {
    name = 'SecondMigration1692579300573'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" ALTER COLUMN "other_images" SET DEFAULT '[]'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "adverts" ALTER COLUMN "other_images" DROP DEFAULT`);
    }

}
