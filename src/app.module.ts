import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DomainsModule} from './domain/domains.module';

import * as ormconfig from './ormconfig';
import {ParserModule} from "./workers/parser.module";
import {ConfigModule} from "@nestjs/config";
import {AppConfigModule} from "./config/config.module";

@Module({
    imports: [
        ConfigModule,
        AppConfigModule,
        TypeOrmModule.forRoot(ormconfig),
        DomainsModule,
        ParserModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
