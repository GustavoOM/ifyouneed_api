import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {User} from "../entities/User";

interface IUserProps{
    name: string
    type: number
    avatar: string
    whatsapp: string
    email: string
    password: string
    bio: string
}

export default class UserContoller{
    async index(request:Request, response:Response){
        const users = await getRepository(User).find()
        return response.json(users)
    }

    async find(request:Request, response:Response){
        try{
            const {id} = request.params
            const user = await getRepository(User).findOne(id)
            return response.json(user)
        }catch (err){
            return response.status(400).json({
                error: "User not found!"
            })
        }
    }

    async create(request:Request, response:Response){
        const data:IUserProps = request.body
        try{
            await getRepository(User).save(data)
        
            return response.status(201).send()
    
        }catch (err){
            return response.status(400).json({
                error: "Unexpected error while creating new user"
            })
        }
    }

    async update(request:Request, response:Response){
        const {id} = request.params
        const data:IUserProps = request.body
        
        try{
            const user = await getRepository(User).update(id, data)

            if(user.affected === 1){
                const userUpdated = await getRepository(User).findOne(id)
                return response.status(201).json(userUpdated)
            }

            return response.status(404).json({ message: "User not found!" })
    
        }catch (err){
            return response.status(400).json({
                error: "Unexpected error while updating user"
            })
        }
    }

    async delete(request:Request, response:Response){
        const {id} = request.params
        
        try{
            const user = await getRepository(User).delete(id)

            if(user.affected === 1)
                return response.status(201).json({message: "User removed!"})

            return response.status(404).json({ message: "User not found!" })
    
        }catch (err){
            return response.status(400).json({
                error: "Unexpected error while updating user"
            })
        }
    }
}