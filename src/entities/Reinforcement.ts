import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm"
import { User } from "./User"

@Entity()
export class Reinforcement {
    @PrimaryGeneratedColumn('uuid')
    id_reinforcement: string

    @Column()
    subject: string

    @Column()
    principal_year: string

    @Column()
    course: string
    
    @Column()
    week_day: number

    @Column()
    from: number

    @Column()
    to: number

    @Column()
    place: string

    @Column()
    reinforcement_bio: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(type => User, reinforcements => Reinforcement)
    user_: User

}