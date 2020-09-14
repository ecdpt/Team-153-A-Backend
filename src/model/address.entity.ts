import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
@Entity()
export class Address extends BaseEntity{
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id:   string;
    
    @Field(type => Int)
    @Column()
    houseno?:   number

    @Field()
    @Column({ length: 25, nullable: false })
    street1?:   string
    
    @Field()
    @Column({ length: 25, nullable: true })
    street2?:   string
   
    @Field()
    @Column({ length: 25, nullable: true })
    bustop?:    string

    @Field()
    @Column({ length: 25, nullable: false })
    road?:      string

    @Field()
    @Column({ length: 25, nullable: true })
    area?:      string

    @Field()
    @Column({ length: 25, nullable: true })
    city?:      string

    @Field()
    @Column({ length: 25, nullable: true })
    state?:     string

  /*  @OneToOne(type => User)
    @JoinColumn()
    user: User;*/
}