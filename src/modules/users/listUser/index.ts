import { UsersRepository } from "database/entity/Users/UsersRepository";
import {ListUserController} from "./ListUserController"
import {ListUserUseCase} from "./ListUserUseCase"

export default(): ListUserController => {
    const usersRepository = new UsersRepository();
    const listUserUseCase = new ListUserUseCase(usersRepository);
    const listUserController = new ListUserController(listUserUseCase);

    return listUserController;
}

