import { Request, Response } from "express";

import { SearchOnStackOverflowService } from "../services/SearchOnStackOverflowService";

export class SearchOnStackOverflowController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { texttreated } = request.params;

    const service = new SearchOnStackOverflowService();

    const result = await service.execute(texttreated);

    if (result instanceof Error) {
      return response.status(500).json(result.message);
    }

    return response.status(200).json(result);
  }
}
