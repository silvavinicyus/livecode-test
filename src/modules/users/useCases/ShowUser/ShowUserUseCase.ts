import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class ShowUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ){}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);


    if(!user) {
      throw new AppError("There is no user with the given id", 404);
    }


    return user;
  }
}