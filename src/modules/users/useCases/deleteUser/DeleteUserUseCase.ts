import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ){}

  async execute(secure_id: string): Promise<void> {
    const userExists = await this.usersRepository.findBySecureId(secure_id);

    if(!userExists) {
      throw new AppError("There is no user with the given id", 404);
    }

    await this.usersRepository.destroy(secure_id);    
  }
}