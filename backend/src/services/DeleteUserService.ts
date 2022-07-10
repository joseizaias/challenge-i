import { getRepository } from "typeorm";

import { User } from "../entities/User";

export class DeleteUserService {
  async execute(id: string): Promise<null | Error> {
    const repository = getRepository(User);

    if (!(await repository.findOne(id))) {
      return new Error("User does not exist!");
    }

    await repository.delete(id);

    return null;
  }
}
