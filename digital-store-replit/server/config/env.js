import dotenv from 'dotenv'; dotenv.config();
export const env = {
  port: process.env.PORT || 8080,
  baseUrl: process.env.BASE_URL || 'http://localhost:8080',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:8080',
  sqlitePath: process.env.SQLITE_PATH || './db/store.sqlite',
  jwtSecret: process.env.JWT_SECRET || 'change_me'
};