import * as dotenv from 'dotenv';
dotenv.config();
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        // host: '127.0.0.1',
        host: 'host.docker.internal',
        port: 3306,
        username: 'root',
        password: 'root',
        connectTimeout: 60 * 60 * 1000,
        database: 'usersdb',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];