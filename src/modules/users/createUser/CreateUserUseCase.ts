
import { IUsersRepository, ICreateUserDTO } from "database/entity/Users/IUsersRepository";
import { User } from "database/entity/Users/User";



class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ firstName, lastName }: ICreateUserDTO): Promise<User> {


    return await this.usersRepository.create({firstName, lastName});
  }
}

export { CreateUserUseCase };
