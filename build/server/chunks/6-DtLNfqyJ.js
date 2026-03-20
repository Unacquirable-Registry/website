import { f as fail, r as redirect } from './index-B2LGyy1l.js';
import { c as createSubmission } from './db-e3GoIyXJ.js';
import 'better-sqlite3';
import 'path';

const load = async () => {
  return {};
};
const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get("name")?.trim();
    const type = data.get("type")?.trim();
    const jurisdiction = data.get("jurisdiction")?.trim();
    const description = data.get("description")?.trim() ?? "";
    const website = data.get("website")?.trim() ?? "";
    const contact_email = data.get("contact_email")?.trim();
    const errors = {};
    if (!name) errors.name = "Name is required.";
    if (!type) errors.type = "Type is required.";
    if (!jurisdiction) errors.jurisdiction = "Jurisdiction is required.";
    if (!contact_email) errors.contact_email = "Contact email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact_email)) errors.contact_email = "Invalid email address.";
    if (Object.keys(errors).length > 0) {
      return fail(400, { errors, values: { name, type, jurisdiction, description, website, contact_email } });
    }
    createSubmission({ name, type, jurisdiction, description, website, contact_email });
    redirect(303, "/submit?success=1");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-d1evulES.js')).default;
const server_id = "src/routes/submit/+page.server.ts";
const imports = ["_app/immutable/nodes/6.DEYSCKYO.js","_app/immutable/chunks/BwUCMdmY.js","_app/immutable/chunks/C9VM4RKl.js","_app/immutable/chunks/DfnHWHO1.js","_app/immutable/chunks/Dk5tK-iP.js","_app/immutable/chunks/CBBiuHqc.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=6-DtLNfqyJ.js.map
