import { Router } from "express";

import listUserController from "modules/users/listUser";
import createUserController from "modules/users/createUser";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) =>
  createUserController().handle(request, response)
);

usersRoutes.get("/", (request, response) =>
  listUserController().handle(request, response)
);

export { usersRoutes };
