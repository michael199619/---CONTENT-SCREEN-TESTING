import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {Resource} from "./resource.entity";
import {JoinTable} from "typeorm";

@Entity()
export class Domains extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "varchar"})
  name: string;

  @Column({type: "varchar"})
  url: string;

  @OneToMany(() => Resource, r => r.domainId)
  resources: Resource[];

}
