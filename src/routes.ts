import {Router} from "express"

import UserController from "./controllers/UserController"
import ReinforcementController from "./controllers/ReinforcementController";

const routes = Router()

const reinforcementController = new ReinforcementController()
const userController = new UserController()

routes.post("/users", userController.create)
routes.get("/users", userController.index)
routes.get("/users/:id", userController.find)
routes.put("/users/:id", userController.update)
routes.delete("/users/:id", userController.delete)

routes.post("/reinforcements", reinforcementController.create)
routes.get("/reinforcements", reinforcementController.index)
routes.get("/reinforcements/:id", reinforcementController.find)
routes.put("/reinforcements/:id", reinforcementController.update)
routes.delete("/reinforcements/:id", reinforcementController.delete)

export default routes;