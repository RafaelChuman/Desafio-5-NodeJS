import { Response, Request } from "express";
import { ListUserUseCase } from "./ListUserUseCase";




class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}


  async handle(request: Request, response: Response): Promise<Response> {
       
    const users = await this.listUserUseCase.execute();

    return response.status(201).json(users);
  }
}

export { ListUserController };
