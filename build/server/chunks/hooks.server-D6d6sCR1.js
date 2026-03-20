import { g as getAllEnterprises } from './db-e3GoIyXJ.js';
import 'better-sqlite3';
import 'path';

const handle = async ({ event, resolve }) => {
  try {
    getAllEnterprises();
  } catch (e) {
    console.error("DB init error:", e);
  }
  return resolve(event);
};

export { handle };
//# sourceMappingURL=hooks.server-D6d6sCR1.js.map
