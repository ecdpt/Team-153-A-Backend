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
import { User }          from '../users/models/user.model'
import { CreateUserInput }   from '../users/createuser-input';
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
    @Args('userInput'){ 
      id,
      role,
      firstName,
      lastName,
      initials,
      password,
      title,
      occupation,  
      phone,
      email,
      created_at }: CreateUserInput, @ResGql() res) {
        let usr = new User();
        usr.email = email,
        usr.firstName = firstName,
        usr.role = role,
        usr.lastName = lastName,
        usr.initials = initials,
        usr.title = title,
        usr.occupation = occupation,
        usr.phone = phone,
        usr.email = email,
        usr.created_at = created_at,
        usr.password = await bcryptjs.hash(password, 10);



      
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