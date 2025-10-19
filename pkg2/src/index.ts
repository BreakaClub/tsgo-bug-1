import Database from 'better-sqlite3';
import { Kysely, SqliteDialect } from 'kysely';

export const db = new Kysely<any>({
  dialect: new SqliteDialect({
    database: new Database('db.sqlite')
  }),
});
