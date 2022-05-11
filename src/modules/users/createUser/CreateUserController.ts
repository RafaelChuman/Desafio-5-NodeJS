import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}



  async handle(request: Request, response: Response): Promise<Response> {
    const {firstName, lastName} = request.body;
    
    const user = this.createUserUseCase.execute({firstName, lastName});

    return response.status(201).json(user);
  }
}

export { CreateUserController };
