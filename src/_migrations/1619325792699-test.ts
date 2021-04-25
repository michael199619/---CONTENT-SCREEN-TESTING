import {MigrationInterface, QueryRunner} from "typeorm";

export class test1619325792699 implements MigrationInterface {
    name = 'test1619325792699'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resource" ADD "domainId" integer`);
        await queryRunner.query(`ALTER TABLE "resource" ADD CONSTRAINT "FK_d14fd89e9ceaf62748974b8734b" FOREIGN KEY ("domainId") REFERENCES "domains"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "resource" DROP CONSTRAINT "FK_d14fd89e9ceaf62748974b8734b"`);
        await queryRunner.query(`ALTER TABLE "resource" DROP COLUMN "domainId"`);
    }

}
