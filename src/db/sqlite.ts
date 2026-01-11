import Database from 'better-sqlite3';

const db = new Database(process.env.DB_PATH || 'books.db');

db.prepare(`
  CREATE TABLE IF NOT EXISTS books (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    publishedYear INTEGER NOT NULL
  )
`).run();

export default db;
