import { Request, Response, NextFunction } from 'express';
export type MiddlewareFunction = (req: Request, res: Response, next: NextFunction) => void;

export default (req: Request, res: Response, next: NextFunction) => {
  console.log(new Date(Date.now()).toLocaleString(), '===', req.url);
  next();
};