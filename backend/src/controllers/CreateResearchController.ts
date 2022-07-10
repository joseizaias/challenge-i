import { Request, Response } from "express";

import { CreateResearchService } from "../services/CreateResearchService";

export class CreateResearchController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, link, email } = request.body;

    const service = new CreateResearchService();

    const result = await service.execute({
      title,
      link,
      email,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
