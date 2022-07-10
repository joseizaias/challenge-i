import { getRepository } from "typeorm";

import { Research } from "../entities/Researchers";
import { User } from "../entities/User";

export class GetAllResearchersOfUserService {
  async execute(email: string): Promise<Research[] | Error> {
    const repositoryResearch = getRepository(Research);
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ email });

    if (!user) {
      return new Error("The user does not Exist!");
    }

    const researchers = await repositoryResearch.find({
      user_id: user.id,
    });

    return researchers;
  }
}
