import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: '192.168.56.101',
  port: 5431,
  username: 'michael',
  password: 'michael',
  database: 'michael',
  synchronize: false,
  dropSchema: false,
  logging: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/_migrations/**/*{.ts,.js}'],
  subscribers: ['subscriber/**/*.ts', 'dist/subscriber/**/.js'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/_migrations',
    subscribersDir: 'subscriber'
  }
}

export = ormconfig;
