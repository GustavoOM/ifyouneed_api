import {getRepository} from "typeorm";
import {Request, Response} from "express";
import { Project } from "../entities/Project";
import convertHourToMinutes from "../services/convertHourToMinutes"

export default class ProjectController{
    async index({query}:Request, response:Response){
        try{
            const options = {where: {...query}}
            if (!query)
                delete options.where
            
            //const projects = await getRepository(Project).find(options)
            const projects = await getRepository(Project).createQueryBuilder("project").leftJoinAndSelect("project.user_", "user").getMany()
            return response.json(projects)
        }catch (err){
            return response.status(400).json({
                error: "Wrong query params!"
            })
        }
        
    }

    async find(request:Request, response:Response){
        try{
            const {id} = request.params
            const project = await getRepository(Project).findOne(id)
            return response.json(project)
        }catch (err){
            return response.status(400).json({
                error: "Project not found!"
            })
        }
    }

    async create(request:Request, response:Response){
        let data = request.body
        data.to = convertHourToMinutes(String(data.to))
        data.from = convertHourToMinutes(String(data.from))
        try{

            await getRepository(Project).save(data)
        
            return response.status(201).send()
    
        }catch (err){
            return response.status(400).json({
                error: "Unexpected error while creating new project"
            })
        }
    }

    async update(request:Request, response:Response){
        const {id} = request.params
        let data = request.body
        data.to = convertHourToMinutes(String(data.to))
        data.from = convertHourToMinutes(String(data.from))
        
        try{
            const project = await getRepository(Project).update(id, data)

            if(project.affected === 1){
                const projectUpdated = await getRepository(Project).findOne(id)
                return response.status(201).json(projectUpdated)
            }

            return response.status(404).json({ message: "Project not found!" })
    
        }catch (err){
            return response.status(400).json({
                error: "Unexpected error while updating project"
            })
        }
    }

    async delete(request:Request, response:Response){
        const {id} = request.params
        
        try{
            const project = await getRepository(Project).delete(id)

            if(project.affected === 1)
                return response.status(201).json({message: "Project removed!"})

            return response.status(404).json({ message: "project not found!" })
    
        }catch (err){
            return response.status(400).json({
                error: "Unexpected error while updating project"
            })
        }
    }
}