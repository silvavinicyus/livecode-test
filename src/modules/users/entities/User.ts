import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  secure_id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor() {
    if(!this.secure_id) {
      this.secure_id = uuidV4();
    }
  }
}