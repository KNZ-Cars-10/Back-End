import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1693321760051 implements MigrationInterface {
    name = 'InitialMigration1693321760051'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_c870c44a72a624e88130b663fc2"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_c870c44a72a624e88130b663fc2" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_c870c44a72a624e88130b663fc2"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_c870c44a72a624e88130b663fc2" FOREIGN KEY ("advertId") REFERENCES "adverts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
