import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { Field, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Address } from './address.entity';

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

/*export type UserRoleType = "admin" | "viewer" | "doctor" | "nurse"| "keeper"

registerEnumType(UserRoleType, {
  name: 'UserRoleType',
});*/


@ObjectType()
@Entity()
export class User extends BaseEntity{
  
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id:   string;

  @Field(type => [String])
  @Column({type: "simple-array", nullable: true})
  role?: string[];

  @Field() 
  @Column({type: "varchar", length: 25, nullable: true})
  firstName?: string;
  
  @Field()
  @Column({type: "varchar", length: 25, nullable: true})
  lastName?: string;
  
  @Field()
  @Column({type: "varchar", length: 15, nullable: true})
  initials?: String

  @Field()
  @Column({type: "varchar", length: 150, nullable: false})
  password: String

  @Field()
  @Column({type: "varchar", length: 25, nullable: true})
  title?: string
  
  @Field()
  @Column({type: "varchar", length: 25, nullable: true})
  occupation?: string

  @Field(type => [String])
  @Column({type: "simple-array", nullable: true})
  phone?: string[]
 
  @Field()
  @Column({type: "varchar", length: 25})
  email: string

  @Field(type => Int)
  @Column({type: "int", nullable: true})
  houseno?:   number

  @Field()
  @Column({type: "varchar", length: 25, nullable: true })
  street1?:   string

  @Field()
  @Column({type: "varchar", length: 25, nullable: true })
  street2?:   string

  @Field()
  @Column({type: "varchar", length: 25, nullable: true })
  bustop?:    string

  @Field()
  @Column({type: "varchar", length: 25, nullable: true })
  road?:      string

  @Field()
  @Column({type: "varchar", length: 25, nullable: true })
  area?:      string

  @Field()
  @Column({type: "varchar", length: 25, nullable: true })
  city?:      string

  @Field()
  @Column({type: "varchar", length: 25, nullable: true })
  state?:     string

  @Field()
  @Column({type: "varchar", length: 255, nullable: true })
  photourl?:     string

  @Field(type => Int)
  @Column({type: "varchar", length: 25, nullable: true })
  creation_date?:  number

  
 /* @Field(type => Address, {nullable: true})
  @OneToOne(type => Address, address => address.user)
  address?: Address*/
  @Field()
  @Column({type: "varchar", length: 25, nullable: true})
  created_at?: string;
  
}


