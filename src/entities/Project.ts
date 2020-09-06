import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne} from "typeorm"
import { User } from "./User"

@Entity()
export class Project {
    @PrimaryGeneratedColumn('uuid')
    id_project: string

    @Column()
    name_project: string
    
    @Column()
    week_day: number

    @Column()
    from: number

    @Column()
    to: number

    @Column()
    place: string

    @Column()
    project_bio: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(type => User, projects => Project)
    user_: User

}