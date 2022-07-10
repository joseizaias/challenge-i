import { getRepository } from "typeorm";

import { User } from "../entities/User";

type UserUpdateRequest = {
  id: string;
  name: string;
  email: string;
};

export class UpdateUserService {
  async execute({ id, name, email }: UserUpdateRequest): Promise<User | Error> {
    const repository = getRepository(User);

    const user = await repository.findOne(id);

    if (!user) {
      return new Error("User does not Exist.");
    }

    user.name = name || user.name;
    user.email = email || user.email;

    await repository.save(user);

    return user;
  }
}
