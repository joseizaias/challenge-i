import { Request, Response } from "express";

import { UpdateUserService } from "../services/UpdateUserService";

export class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email } = request.body;

    const service = new UpdateUserService();

    const result = await service.execute({ id, name, email });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
