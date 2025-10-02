import Database from 'better-sqlite3';
import fs from 'fs';
import { env } from './env.js';
const dbDir = env.sqlitePath.split('/').slice(0,-1).join('/');
if (dbDir && !fs.existsSync(dbDir)) fs.mkdirSync(dbDir, { recursive: true });
export const db = new Database(env.sqlitePath);
export function applySchema(){
  const schema = `CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE NOT NULL, password_hash TEXT NOT NULL);`;
  db.exec(schema);
}