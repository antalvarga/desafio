import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createAvailability1603057525157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'availability'
            , columns: [
                {
                    name: 'id'
                    , type: 'integer'
                    , unsigned: true
                    , isPrimary: true
                    , isGenerated: true
                    , generationStrategy: 'increment'
                    ,
                }
                , {
                    name: 'plans_id'
                    , type: 'integer'
                    ,
                }
                , {
                    name: 'ddd'
                    , type: 'varchar(4)'
                    ,
                } 
            ] 
            , foreignKeys: [
                {
                    name: 'FK_availability_plans'
                    , columnNames: ['plans_id']
                    , referencedTableName: 'plans'
                    , referencedColumnNames: ['id']
                    , onUpdate: 'CASCADE'
                    , onDelete: 'CASCADE'
                 }     
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('availability');
    }

}
