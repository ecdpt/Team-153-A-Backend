import { IsEmail, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { User }    from './models/user.model';
import { Address } from './models/address.model';
import { UserRole } from './models/user.model'

import { deserializeUser } from 'passport';

@InputType()
export class AddressInput{

  @Field()
  id:   string;
  
  @Field(type => Number)
  houseNo?:   number

  @Field()
  street1?:   string
  
  @Field()
  street2?:   string
 
  @Field()
  bustop?:    string

  @Field()
  road?:      string

  @Field()
  area?:      string

  @Field()
  city?:      string

  @Field()
  state?:     string


}

@InputType()
export class CreateUserInput{
    
  @Field()
  id:   string;

  @Field(type => [UserRole])
  role: UserRole[];

  @Field() 
  firstName?: string;
  
  @Field()
  lastName?: string;
  
  @Field()
  initials?: String

  @Field()
  password: String

  @Field()
  title?: string
  
  @Field()
  occupation?: string

  @Field(type => [String])
  phone?: string[]
 
  @Field()
  email: string
  
  @Field(type => Date)
  created_at?: Date;

  @Field(type => AddressInput)
  address?: AddressInput;


}