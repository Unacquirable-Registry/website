import Database from 'better-sqlite3';
import path from 'path';

const DB_PATH = path.resolve(process.cwd(), 'registry.db');

let db: Database.Database;

function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    initializeDb(db);
  }
  return db;
}

function initializeDb(database: Database.Database): void {
  database.exec(`
    CREATE TABLE IF NOT EXISTS enterprises (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      jurisdiction TEXT NOT NULL,
      description TEXT,
      website TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      jurisdiction TEXT NOT NULL,
      description TEXT,
      website TEXT,
      contact_email TEXT NOT NULL,
      status TEXT DEFAULT 'pending',
      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  const count = (database.prepare('SELECT COUNT(*) as count FROM enterprises').get() as { count: number }).count;
  if (count === 0) {
    const insert = database.prepare(`
      INSERT INTO enterprises (name, type, jurisdiction, description, website)
      VALUES (@name, @type, @jurisdiction, @description, @website)
    `);
    const seed = database.transaction(() => {
      insert.run({
        name: 'Rolex SA',
        type: 'Private company (family-owned)',
        jurisdiction: 'Switzerland',
        description: 'Held by the Hans Wilsdorf Foundation, a private family trust. Legally structured to prevent any sale.',
        website: 'https://www.rolex.com'
      });
      insert.run({
        name: 'IKEA Foundation',
        type: 'Foundation-owned group',
        jurisdiction: 'Netherlands',
        description: 'IKEA is owned by Stichting INGKA Foundation, a charitable foundation that cannot be sold.',
        website: 'https://www.ikea.com'
      });
      insert.run({
        name: 'Bosch GmbH',
        type: 'Trust/foundation-controlled',
        jurisdiction: 'Germany',
        description: '94% owned by Robert Bosch Stiftung, a charitable foundation. Its charter prohibits sale of the enterprise.',
        website: 'https://www.bosch.com'
      });
    });
    seed();
  }
}

export interface Enterprise {
  id: number;
  name: string;
  type: string;
  jurisdiction: string;
  description: string | null;
  website: string | null;
  created_at: string;
}

export interface Submission {
  id: number;
  name: string;
  type: string;
  jurisdiction: string;
  description: string | null;
  website: string | null;
  contact_email: string;
  status: string;
  submitted_at: string;
}

export function getAllEnterprises(): Enterprise[] {
  return getDb().prepare('SELECT * FROM enterprises ORDER BY created_at DESC').all() as Enterprise[];
}

export function getPendingSubmissions(): Submission[] {
  return getDb().prepare("SELECT * FROM submissions WHERE status = 'pending' ORDER BY submitted_at DESC").all() as Submission[];
}

export function createSubmission(data: {
  name: string;
  type: string;
  jurisdiction: string;
  description: string;
  website: string;
  contact_email: string;
}): void {
  getDb()
    .prepare(`INSERT INTO submissions (name, type, jurisdiction, description, website, contact_email) VALUES (@name, @type, @jurisdiction, @description, @website, @contact_email)`)
    .run(data);
}

export function approveSubmission(id: number): void {
  const db = getDb();
  const sub = db.prepare('SELECT * FROM submissions WHERE id = ?').get(id) as Submission | undefined;
  if (!sub) return;
  const approve = db.transaction(() => {
    db.prepare(`INSERT INTO enterprises (name, type, jurisdiction, description, website) VALUES (?, ?, ?, ?, ?)`).run(
      sub.name, sub.type, sub.jurisdiction, sub.description, sub.website
    );
    db.prepare("UPDATE submissions SET status = 'approved' WHERE id = ?").run(id);
  });
  approve();
}

export function rejectSubmission(id: number): void {
  getDb().prepare("UPDATE submissions SET status = 'rejected' WHERE id = ?").run(id);
}
