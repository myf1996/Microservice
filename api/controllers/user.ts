import { Request, Response } from 'express';
import { UserServices } from '../services/user.service';
import { UserResponse } from '../dto/user.dto';

export = () => ({
  get: async (req: Request, res: Response<UserResponse[]>)  => {
    let userService = new UserServices()
    const query = req.query;
    const result = await userService.getAllUser(null, query)
    res.send(result);
  },
  post: async (req: Request, res: Response<UserResponse>)  => {
    let userService = new UserServices()
    const query = req.query;
    const dto = req.body;
    const result = await userService.createUser(null, query, dto)
    res.send(result);
  }
});