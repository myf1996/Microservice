import { Request, Response } from 'express';

interface HealthResponse {
  message: string;
}

export = () => ({
  get: async (req: Request, res: Response<HealthResponse>)  => {
    res.json({ message: "User Service is healthy."});
  }
});