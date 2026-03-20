import Database from 'better-sqlite3';
import path from 'path';

const DB_PATH = path.resolve(process.cwd(), "registry.db");
let db;
function getDb() {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    initializeDb(db);
  }
  return db;
}
function initializeDb(database) {
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
  const count = database.prepare("SELECT COUNT(*) as count FROM enterprises").get().count;
  if (count === 0) {
    const insert = database.prepare(`
      INSERT INTO enterprises (name, type, jurisdiction, description, website)
      VALUES (@name, @type, @jurisdiction, @description, @website)
    `);
    const seed = database.transaction(() => {
      insert.run({
        name: "Rolex SA",
        type: "Private company (family-owned)",
        jurisdiction: "Switzerland",
        description: "Held by the Hans Wilsdorf Foundation, a private family trust. Legally structured to prevent any sale.",
        website: "https://www.rolex.com"
      });
      insert.run({
        name: "IKEA Foundation",
        type: "Foundation-owned group",
        jurisdiction: "Netherlands",
        description: "IKEA is owned by Stichting INGKA Foundation, a charitable foundation that cannot be sold.",
        website: "https://www.ikea.com"
      });
      insert.run({
        name: "Bosch GmbH",
        type: "Trust/foundation-controlled",
        jurisdiction: "Germany",
        description: "94% owned by Robert Bosch Stiftung, a charitable foundation. Its charter prohibits sale of the enterprise.",
        website: "https://www.bosch.com"
      });
    });
    seed();
  }
}
function getAllEnterprises() {
  return getDb().prepare("SELECT * FROM enterprises ORDER BY created_at DESC").all();
}
function getPendingSubmissions() {
  return getDb().prepare("SELECT * FROM submissions WHERE status = 'pending' ORDER BY submitted_at DESC").all();
}
function createSubmission(data) {
  getDb().prepare(`INSERT INTO submissions (name, type, jurisdiction, description, website, contact_email) VALUES (@name, @type, @jurisdiction, @description, @website, @contact_email)`).run(data);
}
function approveSubmission(id) {
  const db2 = getDb();
  const sub = db2.prepare("SELECT * FROM submissions WHERE id = ?").get(id);
  if (!sub) return;
  const approve = db2.transaction(() => {
    db2.prepare(`INSERT INTO enterprises (name, type, jurisdiction, description, website) VALUES (?, ?, ?, ?, ?)`).run(
      sub.name,
      sub.type,
      sub.jurisdiction,
      sub.description,
      sub.website
    );
    db2.prepare("UPDATE submissions SET status = 'approved' WHERE id = ?").run(id);
  });
  approve();
}
function rejectSubmission(id) {
  getDb().prepare("UPDATE submissions SET status = 'rejected' WHERE id = ?").run(id);
}

export { approveSubmission as a, getPendingSubmissions as b, createSubmission as c, getAllEnterprises as g, rejectSubmission as r };
//# sourceMappingURL=db-e3GoIyXJ.js.map
