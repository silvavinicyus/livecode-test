import { getRepository, Repository } from "typeorm";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor(){
    this.repository = getRepository(User);
  }

  async index(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({email});

    return user;
  }

  async create({name, email, password}: CreateUserDTO): Promise<User> {
    const user = this.repository.create({name, email, password});

    await this.repository.save(user);

    return user;
  }
}