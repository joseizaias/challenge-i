import { getRepository } from "typeorm";

import { Research } from "../entities/Researchers";
import { User } from "../entities/User";

type ResearchRequest = {
  title: string;
  link: string;
  email: string;
};

export class CreateResearchService {
  async execute({
    title,
    link,
    email,
  }: ResearchRequest): Promise<Research | Error> {
    const repositoryResearch = getRepository(Research);

    const repositoryUser = getRepository(User);

    const user = await repositoryUser.findOne({ email });

    if (!user) {
      return new Error("User does not exist.");
    }

    const research = repositoryResearch.create({
      title,
      link,
      user_id: user.id,
    });

    await repositoryResearch.save(research);

    return research;
  }
}
