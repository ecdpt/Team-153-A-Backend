import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { ResGql } from '../shared/decorators/decorators';
import { AuthService }  from '../auth/auth.service';
import { User } from '../model/user.entity';
import { Address } from  '../model/address.entity';
import { Resolver, Mutation, Args, Query, ResolveField, Parent } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { createParamDecorator, ExecutionContext, UseGuards, Request } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { LocalAuthGuard }      from '../auth/local-auth.guard';
import { GqlAuthGuard }        from  '../auth/jwt-auth.guard';
import { CreateUserInput }    from './createuser-input'

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  },
);

@Resolver(returns => User)
export class UserResolver {
  constructor( 
    @Inject(UsersService) private usersService: UsersService,
    
   // @Inject(AuthService) private authService: AuthService  
    ) { }

  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  whoAmI(@CurrentUser() user: User) {
  return this.usersService.findById(user.id);
  }

  @Query(() =>User)
  async user(@Args('id') id: string): Promise<User> {
    return await this.usersService.findOne(id);
  }

  @Query(returns => [User])
 // @UseGuards(GqlAuthGuard)
  async getUsers(): Promise<User[]> {
    return await this.usersService.getUsers()
  }
 /* @ResolveField(() => Address)
  async address(@Parent() user) {
    const { id } = user;
    console.log(user);
    return this.usersService.findById(id);
  }*/

  

    @Mutation(returns => Number)
    async deleteByDate(
      @Args('dateInput')  date: string) {
          const result = await this.usersService.deleteUserByDate(date);
         console.log(result.affected);
         return result.affected;
      }

      @Mutation(returns => Number)
    async deleteById(
      @Args('dateInput')  id: string) {
          const result = await this.usersService.deleteUserById(id);
         console.log(result.affected);
         return result.affected;
      }
  
  
   /* @Mutation(returns => User)
    async signup(
      @Args('signUpInput') signUpInputDto: User,
      @ResGql() res: Response,
    ) {
      const emailExists = await this.userService.findUserByEmail(signUpInputDto.email);
      if (emailExists) {
        throw Error('Email is already in use');
      }
      const password = await bcryptjs.hash(signUpInputDto.password, 10);
  
      const user = await this.userService.createUser(signUpInputDto);
  
      const jwt = this.jwt.sign({ id: user.id });
      res.cookie('token', jwt, { httpOnly: true });
  
      return user;
    }*/


 
 /* @Query(() => [Address])
  async address(@Args('id') id: string): Promise<Address> {
    return await this.addressService.findByUser(id);
  }*/
}