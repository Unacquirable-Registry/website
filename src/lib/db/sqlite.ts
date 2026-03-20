import BetterSqlite3 from 'better-sqlite3';
import path from 'path';
import type { Database, Enterprise, Submission } from './interface';

const DB_PATH = path.resolve(process.cwd(), 'registry.db');

export class SQLiteDatabase implements Database {
  private db: BetterSqlite3.Database;

  constructor() {
    this.db = new BetterSqlite3(DB_PATH);
    this.db.pragma('journal_mode = WAL');
    this.initializeDb();
  }

  private initializeDb(): void {
    this.db.exec(`
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

    const count = (this.db.prepare('SELECT COUNT(*) as count FROM enterprises').get() as { count: number }).count;
    if (count === 0) {
      const insert = this.db.prepare(`
        INSERT INTO enterprises (name, type, jurisdiction, description, website)
        VALUES (@name, @type, @jurisdiction, @description, @website)
      `);
      const seed = this.db.transaction(() => {
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

  getAllEnterprises(): Enterprise[] {
    return this.db.prepare('SELECT * FROM enterprises ORDER BY created_at DESC').all() as Enterprise[];
  }

  getPendingSubmissions(): Submission[] {
    return this.db.prepare("SELECT * FROM submissions WHERE status = 'pending' ORDER BY submitted_at DESC").all() as Submission[];
  }

  createSubmission(data: {
    name: string;
    type: string;
    jurisdiction: string;
    description: string;
    website: string;
    contact_email: string;
  }): void {
    this.db
      .prepare(`INSERT INTO submissions (name, type, jurisdiction, description, website, contact_email) VALUES (@name, @type, @jurisdiction, @description, @website, @contact_email)`)
      .run(data);
  }

  approveSubmission(id: number): void {
    const sub = this.db.prepare('SELECT * FROM submissions WHERE id = ?').get(id) as Submission | undefined;
    if (!sub) return;
    const approve = this.db.transaction(() => {
      this.db.prepare(`INSERT INTO enterprises (name, type, jurisdiction, description, website) VALUES (?, ?, ?, ?, ?)`).run(
        sub.name, sub.type, sub.jurisdiction, sub.description, sub.website
      );
      this.db.prepare("UPDATE submissions SET status = 'approved' WHERE id = ?").run(id);
    });
    approve();
  }

  rejectSubmission(id: number): void {
    this.db.prepare("UPDATE submissions SET status = 'rejected' WHERE id = ?").run(id);
  }
}
