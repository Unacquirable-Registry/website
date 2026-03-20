import { SQLiteDatabase } from './sqlite';
import type { Database } from './interface';

let dbInstance: Database | null = null;

export function getDb(): Database {
  if (!dbInstance) {
    dbInstance = new SQLiteDatabase();
  }
  return dbInstance;
}

export * from './interface';
