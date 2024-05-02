import { Request, Response, NextFunction } from 'express';
import { UserServices } from '../services/user.service';
import { UserResponse } from '../dto/user.dto';

export = () => ({
  get: async (req: Request, res: Response<UserResponse[]>, next: NextFunction)  => {
    let userService = new UserServices()
    const query = req.query;
    try {
      const result = await userService.getAllUser(null, query)
      res.send(result); 
    } catch (error) {
      next(error);
    }
  },
  post: async (req: Request, res: Response<UserResponse>, next: NextFunction)  => {
    let userService = new UserServices()
    const query = req.query;
    const dto = req.body;
    try {
      const result = await userService.createUser(null, query, dto)
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
});