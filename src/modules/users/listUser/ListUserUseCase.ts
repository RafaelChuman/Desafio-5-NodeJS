
import { IUsersRepository, ICreateUserDTO } from "database/entity/Users/IUsersRepository";
import { User } from "database/entity/Users/User";
import { response } from "express";



class ListUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();

    return users;
  }
}

export { ListUserUseCase };
