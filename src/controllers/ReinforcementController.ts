import {getRepository} from "typeorm";
import {Request, Response} from "express";
import { Reinforcement } from "../entities/Reinforcement";
import convertHourToMinutes from "../utils/convertHourToMinutes"

export default class ReinforcementController{
    async index({query}:Request, response:Response){
        try{
            const options = {where: {...query}}
            if (!query)
                delete options.where
            const reinforcements = await getRepository(Reinforcement).find(options)
            return response.json(reinforcements)
        }catch (err){
            return response.status(400).json({
                error: "Wrong query params!"
            })
        }
        
    }

    async find(request:Request, response:Response){
        try{
            const {id} = request.params
            const reinforcement = await getRepository(Reinforcement).findOne(id)
            return response.json(reinforcement)
        }catch (err){
            return response.status(400).json({
                error: "Reinforcement not found!"
            })
        }
    }

    async create(request:Request, response:Response){
        let data = request.body
        data.to = convertHourToMinutes(String(data.to))
        data.from = convertHourToMinutes(String(data.from))
        try{

            await getRepository(Reinforcement).save(data)
        
            return response.status(201).send()
    
        }catch (err){
            return response.status(400).json({
                error: "Unexpected error while creating new reinforcement"
            })
        }
    }

    async update(request:Request, response:Response){
        const {id} = request.params
        let data = request.body
        data.to = convertHourToMinutes(String(data.to))
        data.from = convertHourToMinutes(String(data.from))
        
        try{
            const reinforcement = await getRepository(Reinforcement).update(id, data)

            if(reinforcement.affected === 1){
                const reinforcementUpdated = await getRepository(Reinforcement).findOne(id)
                return response.status(201).json(reinforcementUpdated)
            }

            return response.status(404).json({ message: "Reinforcement not found!" })
    
        }catch (err){
            return response.status(400).json({
                error: "Unexpected error while updating reinforcement"
            })
        }
    }

    async delete(request:Request, response:Response){
        const {id} = request.params
        
        try{
            const reinforcement = await getRepository(Reinforcement).delete(id)

            if(reinforcement.affected === 1)
                return response.status(201).json({message: "Reinforcement removed!"})

            return response.status(404).json({ message: "Reinforcement not found!" })
    
        }catch (err){
            return response.status(400).json({
                error: "Unexpected error while updating reinforcement"
            })
        }
    }
}