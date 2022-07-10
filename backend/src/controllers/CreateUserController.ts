import { Request, Response } from "express";

import { CreateUserService } from "../services/CreateUserServices";

export class CreateUserController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response | Error> {
    const { token } = request.body;

    const service = new CreateUserService();

    const result = await service.execute(token);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
