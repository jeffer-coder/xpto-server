/* eslint-disable camelcase */
import { hash } from 'bcrypt'
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    avatar: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @BeforeInsert()
    hash = async () => {
      this.password = await hash(this.password, 10)
    }

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
