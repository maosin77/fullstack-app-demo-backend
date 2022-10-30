import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async findAll() {
    const users = await this.usersRepository.find();
    return users;
  }

  async create(@Body() createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    const createdUser = await this.usersRepository.save(newUser);
    return createdUser;
  }
}
