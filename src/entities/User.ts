import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    type: number

    @Column()
    name: string

    @Column()
    avatar: string

    @Column()
    whatsapp: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    bio: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

}
