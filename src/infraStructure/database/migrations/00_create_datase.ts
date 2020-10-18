import {MigrationInterface, QueryRunner, Table} from "typeorm";
 
export class createImages1602863471830 implements MigrationInterface {
 
  public async up(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.createDatabase('database.sqlite' );
  }
 
  public async down(queryRunner: QueryRunner): Promise<void> {
     await queryRunner.dropDatabase('database.sqlite');
  }
}
