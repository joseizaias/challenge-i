import { Request, Response } from "express";

import { GetAllResearchersService } from "../services/GetAllResearchersService";

export class GetAllResearchersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new GetAllResearchersService();

    const researchers = await service.execute();
    return response.json(researchers);
  }
}
