import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.schema';
import { CreateUserInput, UpdateUserInput } from './user.input';
import { UserPayload } from './user.payload';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(body: CreateUserInput): Promise<UserPayload> {
    const createdUser = new this.userModel(body);
    return await createdUser.save();
  }

  async findUser(_id: string): Promise<UserPayload> {
    const user = await this.userModel.findOne({ _id }).exec();

    if (!user) {
      throw new NotFoundException(`User with email id:${_id} not found `);
    }
    return user;
  }

  async listUser(): Promise<UserPayload[]> {
    return await this.userModel.find();
  }

  async updateUser(_id: string, body: UpdateUserInput): Promise<UserPayload> {
    await this.userModel.updateOne({ _id }, body);
    return this.userModel.findById(_id);
  }

  async deleteUser(_id: string): Promise<void> {
    await this.userModel.deleteOne({ _id });
  }
}
