import { Request, Response } from "express";

import { IResearch } from "../interfaces/IGoogleContext";
import { SaveAllResearchersService } from "../services/SaveAllResearchersService";

export class SaveAllResearchersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;
    const { userData } = request.body;

    const researchers = userData as IResearch[];

    const service = new SaveAllResearchersService();

    const result = await service.execute({ email, researchers });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}
