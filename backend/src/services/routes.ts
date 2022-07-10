import { Router } from "express";

import { CreateResearchController } from "../controllers/CreateResearchController";
import { CreateUserController } from "../controllers/CreateUserController";
import { DeleteAllResearchersController } from "../controllers/DeleteAllResearchersController";
import { DeleteUserController } from "../controllers/DeleteUserController";
import { GetAllUsersController } from "../controllers/GetAllCategoriesController";
import { GetAllResearchersController } from "../controllers/GetAllResearchersController";
import { GetAllResearchersOfUserController } from "../controllers/GetAllResearchersOfUserController";
import { SaveAllResearchersController } from "../controllers/SaveAllResearchersController";
import { SearchOnStackOverflowController } from "../controllers/SearchOnStackOverflowController";
import { UpdateUserController } from "../controllers/UpdateUserController";

const routes = Router();

routes.post("/users", new CreateUserController().handle);
routes.get("/users", new GetAllUsersController().handle);
routes.delete("/users/:id", new DeleteUserController().handle);
routes.put("/users/:id", new UpdateUserController().handle);

routes.post("/research", new CreateResearchController().handle);
routes.get("/research", new GetAllResearchersController().handle);
routes.post("/research/:email", new SaveAllResearchersController().handle);
routes.get("/research/:email", new GetAllResearchersOfUserController().handle);
routes.delete("/research/:email", new DeleteAllResearchersController().handle);
routes.get(
  "/searchestackoverflow/:texttreated",
  new SearchOnStackOverflowController().handle
);

export { routes };
