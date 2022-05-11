import { v4 as uuidV4 } from "uuid";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, PrimaryColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryColumn()
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id)
        {
            this.id = uuidV4();
        }
    }

}



