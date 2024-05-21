import { Request, Response, NextFunction } from 'express';
export type MiddlewareFunction = (req: Request, res: Response, next: NextFunction) => void;

export const authenticate: MiddlewareFunction  = (req, res, next) => {
  if (!req.headers.authorization) {
    // Decode authorization token
    // Check on DB
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};