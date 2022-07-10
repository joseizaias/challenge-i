import { getRepository } from "typeorm";

import { User } from "../entities/User";

export class GetAllUsersService {
  async execute(): Promise<User[]> {
    const repository = getRepository(User);

    const users = await repository.find();

    return users;
  }
}
