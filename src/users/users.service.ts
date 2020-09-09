import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/user.model';
import { Address }   from './models/address.model'

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
        @InjectRepository(Address) private addressRepository: Repository<Address>) 
        { }

    async getUsers(): Promise<User[]> {
        return await this.usersRepository.find();
    }

    async findOne(_id: string): Promise<User> {
        return await this.usersRepository.findOneOrFail({
           // select: * //["firstName", "lastName", "birthday", "isActive"],
            where: [{ "id": _id }]
        });
    }

    async findUserByEmail(_email: string ): Promise<User> {
        console.log(_email)
        return await this.usersRepository.findOneOrFail({
           // select: * //["firstName", "lastName", "birthday", "isActive"],
            where: [{ "email": _email }]
        });
    }

    async findById(_id: string): Promise<Address> {
        return await this.addressRepository.findOneOrFail({
           // select: * //["firstName", "lastName", "birthday", "isActive"],
            where: [{ "id": _id }]
        });
    }

    async createUser(user: User): Promise<User> {
        return this.usersRepository.save(user)
    }

    async updateUser(user: User) {
        return this.usersRepository.save(user)
    }

    async deleteUserByDate(date: Date) {
        return await this.usersRepository.delete(
            { "created_at": date }
         );
    }
}
