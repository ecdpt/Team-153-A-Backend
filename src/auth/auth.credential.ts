import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CredentialInput {
  
  @Field()
  username: string;

  @Field()
  password: string;
}