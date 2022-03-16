import { Router } from "express";
import { CreateUserController } from "../../../modules/users/useCases/CreateUser/CreateUserController";
import { ListAllUsersController } from "../../../modules/users/useCases/ListAllUsers/ListAllUsersController";
import { ListAllUsersUseCase } from "../../../modules/users/useCases/ListAllUsers/ListAllUsersUseCase";

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();

const userRoutes = Router();

userRoutes.post('/', createUserController.handle);
userRoutes.get('/', listAllUsersController.handle);

export { userRoutes };