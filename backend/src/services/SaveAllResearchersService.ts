import { getRepository } from "typeorm";

import { User } from "../entities/User";
import { IResearch } from "../interfaces/IGoogleContext";
import { CreateResearchService } from "./CreateResearchService";

interface IData {
  email: string;
  researchers: IResearch[];
}

export class SaveAllResearchersService {
  async execute({ email, researchers }: IData): Promise<void | Error> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne({ email });

    if (!user) {
      return new Error("The user does not Exist!");
    }

    const promises = [];

    for (let i = 0; i < researchers.length; i += 1) {
      const service = new CreateResearchService();

      const result = service.execute({
        title: researchers[i].title,
        link: researchers[i].link,
        email: user.email,
      });

      promises.push(result);
    }

    await Promise.all(promises);
    return null;
  }
}
