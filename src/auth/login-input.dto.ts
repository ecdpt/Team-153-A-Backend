import { IsEmail, MinLength } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';
import { deserializeUser } from 'passport';

@InputType()
export class LoginInput{
    @Field()
    @IsEmail()
    readonly email: string;
    
    @Field()
    @MinLength(6)
    readonly password: string;
}