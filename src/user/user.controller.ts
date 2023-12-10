import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.UserService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    const user = await this.UserService.findOne(id);

    if (!user) {
      throw new Error('User not found');
    } else return user;
  }

  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.UserService.create(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.UserService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    const user = await this.UserService.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }

    return this.UserService.delete(id);
  }
}
