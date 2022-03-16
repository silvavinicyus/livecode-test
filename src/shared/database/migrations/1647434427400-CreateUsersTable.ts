import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1647434427400 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'secure_id',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'name',
            type: 'varchar',            
          },
          {
            name: 'email',
            type: 'varchar',  
            isUnique: true          
          },
          {
            name: 'password',
            type: 'varchar',
          }
        ]
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
    }

}
