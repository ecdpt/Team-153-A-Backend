import { IsEmail, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { User }    from '../model/user.entity';
import { Address } from '../model/address.entity';
import { UserRole } from '../model/user.entity'

import { deserializeUser } from 'passport';

@InputType()
export class AddressInput{

  @Field()
  id:   string;
  
 /* @Field(type => Number, {nullable: true})
  houseno?:   number*/

  @Field()
  street1:   string
  
  @Field({nullable: true})
  street2?:   string
 
  @Field({nullable: true})
  bustop?:    string

  @Field({nullable: true})
  road?:      string

  @Field({nullable: true})
  area?:      string

  @Field({nullable: true})
  city?:      string

  @Field({nullable: true})
  state?:     string


}

@InputType()
export class CreateUserInput{
    
  @Field()
  id:   string;

  @Field()
  password: String

  @Field()
  email: string
  
  @Field(type => [String])
  role?: string[];

  @Field() 
  firstName?: string;
  
  @Field()
  lastName?: string;
  
  @Field()
  initials?: String

  @Field()
  title?: string
  
  @Field()
  occupation?: string

  @Field(type => [String])
  phone!: string[]
 
  @Field()
  created_at: string;

  @Field()
  houseno?:   number;

  @Field()
  creation_date?:  number



/*
  @Field(type => AddressInput,{nullable: true})
  address?: AddressInput;*/


}