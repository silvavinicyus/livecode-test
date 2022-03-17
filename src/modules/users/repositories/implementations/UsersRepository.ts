import { getRepository, Repository } from "typeorm";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { IUpdateUser } from "../../dtos/IUpdateUser";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor(){
    this.repository = getRepository(User);
  }

  async update({ user, name }: IUpdateUser): Promise<User> {
    user.name = name;

    await this.repository.save(user);

    return user;
  }

  async destroy(secure_id: string): Promise<void> {
    await this.repository.delete({secure_id});    
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne({id});

    return user;
  }

  async findBySecureId(secure_id: string): Promise<User> {
    const user = await this.repository.findOne({secure_id});

    return user;
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