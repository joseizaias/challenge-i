import { getRepository } from "typeorm";

import { Research } from "../entities/Researchers";
import { IResearch } from "../interfaces/IGoogleContext";

export async function oldUserSearches(user_id: string): Promise<IResearch[]> {
  const repositoryResearch = getRepository(Research);

  const allUserSearchresult = await repositoryResearch.find({ user_id });
  const result: IResearch[] = [];

  for (let i = 0; i < allUserSearchresult.length; i += 1) {
    result.push({
      id: allUserSearchresult[i].id,
      title: allUserSearchresult[i].title,
      link: allUserSearchresult[i].link,
    });
  }

  return result;
}
