import { User } from "./User";

interface ICreateUserDTO {
  firstName: string;
  lastName: string;
}

interface IUsersRepository {
  create({ firstName, lastName }: ICreateUserDTO): Promise<User>;
  // findById(id: string): User | undefined;
  // findByEmail(email: string): User | undefined;
  // turnAdmin(user: User): User;
  list(): Promise<User[]>;
}

export { IUsersRepository, ICreateUserDTO };
