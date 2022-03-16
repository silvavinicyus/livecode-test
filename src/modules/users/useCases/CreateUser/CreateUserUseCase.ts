import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { hash } from 'bcrypt';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ){}

  async execute({name, email, password}: CreateUserDTO): Promise<User> {
    const emailUsed = await this.usersRepository.findByEmail(email);

    if(emailUsed) {
      throw new AppError("There is already a user with this email", 409);
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({name, email, password: hashedPassword});

    return user;
  }
}