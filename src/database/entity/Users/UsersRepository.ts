
import { getRepository, Repository } from "typeorm";
import { IUsersRepository, ICreateUserDTO } from "./IUsersRepository";
import { User } from "./User";

class UsersRepository implements IUsersRepository {

  private repository: Repository<User>;

  private static INSTANCE: UsersRepository;

  constructor() {
    this.repository = getRepository(User);
  }

  // public static getInstance(): UsersRepository {
  //   if (!UsersRepository.INSTANCE) {
  //     UsersRepository.INSTANCE = new UsersRepository();
  //   }

  //   return UsersRepository.INSTANCE;
  // }

  async create({ firstName, lastName }: ICreateUserDTO): Promise<User> {

    const user = this.repository.create({
      firstName,
      lastName,
    });

    await this.repository.save(user);

    return user;
  }

  // findById(id: string): User | undefined {
  //   // Complete aqui
  // }

  // findByEmail(email: string): User | undefined {
  //   // Complete aqui
  // }

  // turnAdmin(receivedUser: User): User {
  //   // Complete aqui
  // }

  async list(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }
}

export { UsersRepository };
