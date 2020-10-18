import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { query } from "express";

export class createPlans1603045398149 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable( new Table ({
            name: 'plans'
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
                    name: 'description'
                    , type: 'varchar(100)'                   
                    ,
                }
                , {
                    name: 'minutes'
                    , type: 'integer'
                    , isNullable: false
                    ,
                }
                , {
                    name: 'internet'
                    , type: 'integer'
                    , isNullable: false
                    ,
                }
                , {
                    name: 'cost'
                    , type: 'decimal'
                    , scale: 2
                }
                , {
                    name: 'type'
                    , type: 'varchar(10)'
                    , isNullable: false
                    ,
                }
                , {
                    name: 'operator'
                    , type: 'varchar(20)'
                    ,
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('plans')        

    }

}
