import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm"

export class CreateUser1652238152394 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        
        await queryRunner.createTable(
            new Table(
                {
                    name:"User",
                    columns: [
                        {
                            name: "id",
                            type: "uuid",
                            isPrimary: true,
                        },
                        {
                            name: "firstname",
                            type: "varchar",
                        },
                        {
                            name: "lastname",
                            type: "varchar",
                        },
                        {
                            name: "created_at",
                            type: "timestamp",
                            default: "now()"
                        }
                    ],
                })
        );

        await queryRunner.createIndex(
            "user_name",
            new TableIndex({
                name: "IDX_USER_NAME",
                columnNames: ["name"],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    
    
        await queryRunner.dropIndex("question", "IDX_QUESTION_NAME");
        
        await queryRunner.dropTable("question");

    }


}
