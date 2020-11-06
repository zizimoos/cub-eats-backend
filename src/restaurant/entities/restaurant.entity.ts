import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  @IsNumber()
  id: number;

  @Field(() => String)
  @Column()
  @IsString()
  name: string;

  @Field(() => Boolean, { defaultValue: true })
  @Column({ default: true })
  @IsBoolean()
  @IsOptional()
  isVegan?: boolean;

  @Field(() => String)
  @Column()
  @IsString()
  address: string;

  @Field(() => String)
  @Column()
  @IsString()
  ownerName: string;

  @Field(() => String)
  @Column()
  @IsString()
  categoryName: string;
}
