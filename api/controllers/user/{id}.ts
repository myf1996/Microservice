import { Request, Response } from 'express';
import { UserServices } from '../../services/user.service';
import { UserResponse } from '../../dto/user.dto';


export = () => ({
  // get: async (req: Request, res: Response<UserResponse>)  => {
  //   let userService = new UserServices()
  //   const { id } = req.params;
  //   console.log("id:", id)
  //   const query = req.query;
  //   const result = await userService.getUserbyId(id, null, query)
  //   res.send(result);
  // },
  // patch: async (req: Request, res: Response<UserResponse>)  => {
  //   let userService = new UserServices()
  //   const { id } = req.params;
  //   const query = req.query;
  //   const dto = req.body;
  //   const result = await userService.updateUserbyId(id, null, query, dto)
  //   res.send(result);
  // },
  // delete: async (req: Request, res: Response<UserResponse>)  => {
  //   let userService = new UserServices()
  //   const { id } = req.params;
  //   const query = req.query;
  //   const dto = req.body;
  //   const result = await userService.deketeUserbyId(id, query, dto)
  //   res.send(result);
  // }
});