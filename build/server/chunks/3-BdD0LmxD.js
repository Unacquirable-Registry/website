import { g as getAllEnterprises } from './db-e3GoIyXJ.js';
import 'better-sqlite3';
import 'path';

const load = async () => {
  const enterprises = getAllEnterprises();
  return { enterprises };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-C8hhZpRi.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/3.DtX-euCz.js","_app/immutable/chunks/BwUCMdmY.js","_app/immutable/chunks/C9VM4RKl.js","_app/immutable/chunks/D6YF6ztN.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-BdD0LmxD.js.map
