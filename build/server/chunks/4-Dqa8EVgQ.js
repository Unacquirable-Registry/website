import { r as redirect, f as fail } from './index-B2LGyy1l.js';
import { r as rejectSubmission, a as approveSubmission, b as getPendingSubmissions } from './db-e3GoIyXJ.js';
import { i as isAuthenticated } from './auth-ZawTbZv1.js';
import 'better-sqlite3';
import 'path';
import 'crypto';

const load = async ({ cookies }) => {
  if (!isAuthenticated(cookies)) redirect(303, "/admin/login");
  const pending = getPendingSubmissions();
  return { pending };
};
const actions = {
  approve: async ({ request, cookies }) => {
    if (!isAuthenticated(cookies)) redirect(303, "/admin/login");
    const data = await request.formData();
    const id = parseInt(data.get("id"), 10);
    if (!id) return fail(400, { error: "Invalid ID" });
    approveSubmission(id);
    return { success: true };
  },
  reject: async ({ request, cookies }) => {
    if (!isAuthenticated(cookies)) redirect(303, "/admin/login");
    const data = await request.formData();
    const id = parseInt(data.get("id"), 10);
    if (!id) return fail(400, { error: "Invalid ID" });
    rejectSubmission(id);
    return { success: true };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-sPOdZAAQ.js')).default;
const server_id = "src/routes/admin/+page.server.ts";
const imports = ["_app/immutable/nodes/4.QaBHHkD-.js","_app/immutable/chunks/BwUCMdmY.js","_app/immutable/chunks/C9VM4RKl.js","_app/immutable/chunks/D6YF6ztN.js","_app/immutable/chunks/DfnHWHO1.js","_app/immutable/chunks/Dk5tK-iP.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-Dqa8EVgQ.js.map
