import { Request, Response } from "express";

import { GetAllResearchersOfUserService } from "../services/GetAllResearchersOfUserService";

export class GetAllResearchersOfUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.params;

    const service = new GetAllResearchersOfUserService();

    const result = await service.execute(email);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
