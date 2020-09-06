import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
import { IsEmail, Max, Min } from "class-validator"
//https://github.com/typestack/class-validator
import { Project } from "./Project";
import { Reinforcement } from "./Reinforcement";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    //Case 0: "Professor"
    //Case 1: "Aluno"
    //Case 2: "Técnico"
    //Case 3: "Responsável"
    //Case 4: "Administrador"
    @Column()
    @Max(4, {message: "Options: (0)Professor, (1)Aluno, (2)Técnico, (3)Responsável, (4)Administrador"})
    @Min(0, {message: "Options: (0)Professor, (1)Aluno, (2)Técnico, (3)Responsável, (4)Administrador"})
    type: number

    @Column()
    name: string

    @Column()
    avatar: string

    @Column()
    whatsapp: string

    @Column()
    @IsEmail()
    email: string

    //.addSelect("user.password")
    @Column({select: false})
    password: string

    @Column()
    bio: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(type => Project, user => User)
    projects: Project[]

    @OneToMany(type => Reinforcement, user => User)
    reinforcements: Reinforcement[]

}
