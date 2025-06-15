import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({id: id});
  }
    
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
  async update(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}