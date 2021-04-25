import {MigrationInterface, QueryRunner} from "typeorm";

export class test1619326055185 implements MigrationInterface {
    name = 'test1619326055185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resource" DROP COLUMN "position"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resource" ADD "position" json NOT NULL`);
    }

}
