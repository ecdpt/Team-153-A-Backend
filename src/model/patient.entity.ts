import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToOne,
                OneToMany } from 'typeorm';
import { Field, ID, Int, ObjectType, registerEnumType, Parent } from '@nestjs/graphql';
import { Address } from './address.entity';


@ObjectType()
@Entity()
export class Patient extends BaseEntity{
  
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id:   string;

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
  @OneToOne(type => Patient, patient => patient.address)
  address?: Address
/*
  @Field(type => Visit)
  @OneToMany(type => Patient, patient => patient.visits)
  visits?: [Visit]
  */
  @Field(type => Date)
  @Column(type => Date)
  @CreateDateColumn()
  created_at?: Date;
  
}


