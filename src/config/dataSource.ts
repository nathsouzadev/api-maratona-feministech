import 'dotenv/config'
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  entities: [
    
  ],
  migrations: [
    './src/config/migrations/*.{js,ts}'
  ],
  ssl: {
    rejectUnauthorized: false
  },
  logging: true
})

export default dataSource;
