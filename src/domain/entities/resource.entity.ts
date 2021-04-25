import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn, RelationId} from 'typeorm';
import {Domains} from "./domains.entity";

enum ResourceStatus {
  show = 'SHOW',
  pending = 'PENDING',
  not = 'NOT'
}

@Entity()
export class Resource extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: "text"})
  html: string;

  @Column({type: "varchar"})
  image: string;

  @Column({type: 'enum', enum: ResourceStatus})
  status: ResourceStatus;

  @ManyToOne(type => Domains, d => d.resources, {onDelete: "CASCADE", eager: true})
  domain: Domains;

  // in order be able to fetch resources in admin-bro - we have to have id available
  @RelationId((r: Resource) => r.domain)
  domainId: number;
}
