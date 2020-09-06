import {Router} from "express"

import UserController from "./controllers/UserController"
import ReinforcementController from "./controllers/ReinforcementController";
import ProjectController from "./controllers/ProjectController";
import SubjectController from "./controllers/SubjectController";

const routes = Router()

const reinforcementController = new ReinforcementController()
const userController = new UserController()
const projectController = new ProjectController()
const subjectController = new SubjectController()

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

routes.post("/projects", projectController.create)
routes.get("/projects", projectController.index)
routes.get("/projects/:id", projectController.find)
routes.put("/projects/:id", projectController.update)
routes.delete("/projects/:id", projectController.delete)

routes.get("/subjects", subjectController.index)


export default routes;