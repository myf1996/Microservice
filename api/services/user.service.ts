import { users } from './util.user';
import { CustomError } from './../helper/error';

export class UserServices {
  constructor() {}

  async getAllUser(me: any, query: any) {
    return users
  }

  async createUser(me: any, query: any, dto: any) {
    users.push(dto)
    return users[users.length - 1]
  }

  async getUserbyId(id: string, me: any, query: any) {
    const user = users.find(e => e.id === id)
    if (!user) {
      let error = new Error() as CustomError;
      error.status = 404
      error.message = 'Not Found'
      throw error
    }
    return user
  }

  async updateUserbyId(id: string, me: any, query: any, dto: any) {
    const user = await this.getUserbyId(id, me, query);
    return user
  }

  async deketeUserbyId(id: string, me: any, query: any) {
    return await this.getUserbyId(id, me, query);
  }
}