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
    console.log(users);
    return users;
  }

  async create(@Body() createUserDto: CreateUserDto) {
    // todo: do validation
    const newUser = this.usersRepository.create(createUserDto);

    this.usersRepository.save(newUser);

    return 'This action adds a new user';
  }
}
