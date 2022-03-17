import { Request, Response } from "express";
import { container } from "tsyringe";
import { User } from "../../entities/User";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { secure_id } = request.params;
    const { name } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const user = await updateUserUseCase.execute({name, secure_id});

    return response.status(201).json(user);
  }
}