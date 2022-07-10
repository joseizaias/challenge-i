import { getRepository } from "typeorm";

import { Research } from "../entities/Researchers";

export class GetAllResearchersService {
  async execute(): Promise<Research[]> {
    const repository = getRepository(Research);

    const researchers = await repository.find({
      relations: ["user"],
    });

    return researchers;
  }
}
