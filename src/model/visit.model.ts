import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm';
import { Field, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
//import { Address } from './address.model';


@ObjectType()
@Entity()
export class Visit extends BaseEntity{
  
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id:   string;
/*
  @Field(type => Vital)
  @OneToOne(type => Visit, visit => visit.vital)
  vital: Vital*/
  
 /* @Field(type => Address)
  @OneToOne(type => User, user => user.address)
  address?: Address*/
  
  @Field(type => Date)
  @Column(type => Date)
  @CreateDateColumn()
  visit_date?: Date;
  
}


