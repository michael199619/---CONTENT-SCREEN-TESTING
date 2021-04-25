import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Domains } from './entities/domains.entity';
import {Resource} from "./entities/resource.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Domains, Resource]),
  ]
})
export class DomainsModule {}
