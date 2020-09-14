/* import * as bcryptjs from 'bcryptjs';
import { Response } from 'express';
import { UseGuards, Request } from '@nestjs/common';
import { Args, Mutation, Resolver,  } from '@nestjs/graphql';
import { LocalAuthGuard }     from  './local-auth.guard'
import { ResGql } from '../shared/decorators/decorators';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginInput } from './login-input.dto';
import { User }          from '../users/models/user.model'

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly jwt: JwtService,
    private readonly userService: UsersService,
  ) {}

  @Mutation(returns => User)
  @UseGuards(LocalAuthGuard)
  async login(
    @Args('loginInput') { email, password }: LoginInput, @Request() req
     {
        const user = await this.userService.findUserByEmail(email);
        if (!(!!user)) {
            throw Error('Email or password incorrect');
        

        return user;
    }

 
}
*/
import * as bcryptjs from 'bcryptjs';
import { Response } from 'express';
import { Args, Mutation, Resolver, Context } from '@nestjs/graphql';
import { LoginInput } from './login-input.dto';
import { ResGql } from '../shared/decorators/decorators';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User }          from '../model/user.entity'
import { CreateUserInput }   from '../users/createuser-input';
import { Address } from 'src/model/address.entity';
//import { Context } from 'vm';
//import { SignUpInputDto } from './sign-up-input.dto';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly jwt: JwtService,
    private readonly userService: UsersService,
  ) {}

  @Mutation(returns => User)
  async login(
    @Args('loginInput') { email, password }: LoginInput,  @ResGql() res,
  ) {
    console.log(res)
    const user = await this.userService.findUserByEmail(email);
    console.log(user)
    if (!user) {
      throw Error('Email or password incorrect');
    }

    const valid = await bcryptjs.compare(password, user.password);
    console.log(`Valid id: ${valid}`)
    if (!valid) {
      throw Error('Email or password incorrect');
    }

    const jwt = this.jwt.sign({ id: user.id });
    res.cookie('token', jwt, { httpOnly: true });

    return user;
  }

  @Mutation(returns => User)
  async createuser(
    @Args('userInput')
      usr34
     /* id,
      role,
      firstName,
      lastName,
      initials,
      password,
      title,
      occupation,  
      phone,
      email,
      created_at,
      address: addressInput*/
     : CreateUserInput, @ResGql() res) {
        let usr = new User();
        let address = new Address()
        //usr.address = address;
        usr.email = usr34.email,
        usr.firstName = usr34.firstName,
        usr.role = usr34.role,
        usr.lastName = usr34.lastName,
        usr.initials = usr34.initials,
        usr.title = usr34.title,
        usr.occupation = usr34.occupation,
        usr.phone = usr34.phone,
        usr.email = usr34.email,
        usr.created_at = usr34.created_at,
        usr.houseno = usr34.houseno,
        usr.creation_date = usr34.creation_date
      
       // usr.created_at = usr34.created_at,
        usr.password = await bcryptjs.hash(usr34.password, 10);
      /*  usr.address.area = usr34.address.area
    
        usr.address.bustop = usr34.address.bustop;
        usr.address.city = usr34.address.city;
        //usr.address.houseno = usr34.address.houseno;
        
        usr.address.road = usr34.address.road;
        usr.address.state = usr34.address.state;
        usr.address.street1 = usr34.address.street1;
        usr.address.street2 = usr34.address.street2;*/
       
        console.log(usr)

        const user1 = await this.userService.createUser(usr);

        const jwt = this.jwt.sign({ id: user1.id });
        res.cookie('token', jwt, { httpOnly: true });

        return user1;
    }

/*  @Mutation()
  async signup(
    @Args('signUpInput') signUpInputDto: SignUpInputDto,
    @ResGql() res: Response,
  ) {
    const emailExists = await this.prisma.client.$exists.user({
      email: signUpInputDto.email,
    });
    if (emailExists) {
      throw Error('Email is already in use');
    }
    const password = await bcryptjs.hash(signUpInputDto.password, 10);

    const user = await this.prisma.client.createUser({ ...signUpInputDto, password });

    const jwt = this.jwt.sign({ id: user.id });
    res.cookie('token', jwt, { httpOnly: true });

    return user;
  }*/
}