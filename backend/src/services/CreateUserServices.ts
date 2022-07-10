import { getRepository } from "typeorm";

import { User } from "../entities/User";
import { IResearch } from "../interfaces/IGoogleContext";
import { oldUserSearches } from "./oldUserSearches";
import { validateGoogleToken } from "./validateGoogleToken";

export class CreateUserService {
  async execute(token: string): Promise<IResearch[] | Error> {
    const UserObj = await validateGoogleToken(token);

    if (!UserObj) {
      return new Error("BAD Google Token.");
    }

    const { name, email } = UserObj;
    const repositoryUser = getRepository(User);
    let researchList = [];

    let user = await repositoryUser.findOne({ email });

    if (user) {
      researchList = await oldUserSearches(user.id);
      return researchList;
    }

    user = repositoryUser.create({
      name,
      email,
    });

    await repositoryUser.save(user);

    return [];
  }
}
