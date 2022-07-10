import { getRepository } from "typeorm";

import { Research } from "../entities/Researchers";
import { User } from "../entities/User";

export class DeleteAllResearchersService {
  async execute(email: string): Promise<Research[] | Error> {
    const repositoryResearch = getRepository(Research);
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ email });

    if (!user) {
      return new Error("The user does not Exist!");
    }

    await repositoryResearch.delete({
      user_id: user.id,
    });

    return [];
  }
}
