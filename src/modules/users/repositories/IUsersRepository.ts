import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { IUpdateUser } from "../dtos/IUpdateUser";
import { User } from "../entities/User";

export interface IUsersRepository {
  create(data: CreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User>;
  index(): Promise<User[]>;
  findById(id: string): Promise<User>;
  findBySecureId(secure_id: string): Promise<User>;
  destroy(secure_id: string): Promise<void>;
  update({ user, name }: IUpdateUser): Promise<User>;
}