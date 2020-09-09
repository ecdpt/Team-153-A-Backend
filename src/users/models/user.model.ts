import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { Field, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Address } from './address.model';

export enum UserRole {
  ADMIN   = "admin",
  VIEWER  = "viewer",
  DOCTOR  = "doctor",
  NURSE   = "nurse",
  KEEEPER = "keeper"
}

registerEnumType(UserRole, {
  name: 'UserRole',
});


@ObjectType()
@Entity()
export class User extends BaseEntity{
  
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id:   string;

  @Field(type => [UserRole])
  @Column({
    type: "set",
    enum: UserRole,
    default: [UserRole.VIEWER]
  })
  role: UserRole[];

  @Field() 
  @Column({ length: 25, nullable: false })
  firstName?: string;
  
  @Field()
  @Column({ length: 25, nullable: false })
  lastName?: string;
  
  @Field()
  @Column({ length: 5, nullable: true })
  initials?: String

  @Field()
  @Column()
  password?: String

  @Field()
  @Column({ length: 25, nullable: false })
  title?: string
  
  @Field()
  @Column({ length: 25, nullable: false })
  occupation?: string

  @Field(type => [String])
  @Column("simple-array")
  phone: string[]
 
  @Field()
  @Column()
  email: string
  
  @Field(type => Address)
  @OneToOne(type => Address, address => address.user)
  address?: Address
  
  @Field(type => Date)
  @Column(type => Date)
  @CreateDateColumn()
  created_at?: Date;
  
}


