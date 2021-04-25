import { Module } from '@nestjs/common';
import {ScheduleModule} from "@nestjs/schedule";
import {ParserService} from "./parser.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Domains} from "../domain/entities/domains.entity";
import {Resource} from "../domain/entities/resource.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([Domains]),
    ScheduleModule.forRoot()
  ],
  providers: [ParserService]
})
export class ParserModule {}
