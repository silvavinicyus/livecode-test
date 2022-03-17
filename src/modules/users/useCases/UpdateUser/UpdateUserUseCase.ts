import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { UpdateUserDTO } from "../../dtos/UpdateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ){}

  async execute({name, secure_id}: UpdateUserDTO){
    const userExists = await this.usersRepository.findBySecureId(secure_id);

    if (!userExists) {
      throw new AppError("There is no user with the given id", 404);      
    }
    
    const user = await this.usersRepository.update({ user: userExists, name });

    return user;
  }
}