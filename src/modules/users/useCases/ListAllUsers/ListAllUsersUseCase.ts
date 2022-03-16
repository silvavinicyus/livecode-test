import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class ListAllUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ){}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.index();

    return users;
  }
}