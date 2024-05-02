import { NextFunction, Request, Response } from 'express';
import { UserServices } from '../../services/user.service';
import { UserResponse } from '../../dto/user.dto';


export = () => ({
  get: async (req: Request, res: Response<UserResponse>, next: NextFunction)  => {
    let userService = new UserServices()
    const { id } = req.params;
    const query = req.query;
    try {
      const result = await userService.getUserbyId(id, null, query)
      res.send(result);  
    } catch (error) {
      next(error);
    }
  },
  patch: async (req: Request, res: Response<UserResponse>, next: NextFunction)  => {
    let userService = new UserServices()
    const { id } = req.params;
    const query = req.query;
    const dto = req.body;
    try {
      const result = await userService.updateUserbyId(id, null, query, dto)
      res.send(result); 
    } catch (error) {
      next(error);
    }
  },
  delete: async (req: Request, res: Response<UserResponse>, next: NextFunction)  => {
    let userService = new UserServices()
    const { id } = req.params;
    const query = req.query;
    const dto = req.body;
    try {
      const result = await userService.deketeUserbyId(id, query, dto)
      res.send(result);
    } catch (error) {
      next(error);
    }
  }
});