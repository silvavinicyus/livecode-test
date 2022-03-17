import { Router } from "express";
import { CreateUserController } from "../../../modules/users/useCases/CreateUser/CreateUserController";
import { DeleteUserController } from "../../../modules/users/useCases/deleteUser/DeleteUserController";
import { ListAllUsersController } from "../../../modules/users/useCases/ListAllUsers/ListAllUsersController";
import { ListAllUsersUseCase } from "../../../modules/users/useCases/ListAllUsers/ListAllUsersUseCase";
import { ShowUSerController } from "../../../modules/users/useCases/ShowUser/ShowUserController";
import { UpdateUserController } from "../../../modules/users/useCases/UpdateUser/UpdateUserController";

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const showUserController = new ShowUSerController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

const userRoutes = Router();

userRoutes.post('/', createUserController.handle);
userRoutes.get('/', listAllUsersController.handle);
userRoutes.get('/:id', showUserController.handle);
userRoutes.delete('/:secure_id', deleteUserController.handle);
userRoutes.put('/:secure_id', updateUserController.handle);

export { userRoutes };